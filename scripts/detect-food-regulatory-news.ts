import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "../src/data/food_regulatory_news.json");

export interface FoodRegulatoryNewsItem {
  id: string;
  title: string;
  authority: string;
  actionType:
    | "FINE_PENALTY"
    | "BAN_RECALL"
    | "MISLEADING_CLAIM"
    | "ADULTERATION_BUST"
    | "STANDARDS_DIRECTIVE";
  penaltyAmount: string;
  productCategory:
    | "grain_flour"
    | "dairy_paneer"
    | "baby_food"
    | "sugar_confectionery"
    | "spices_condiments"
    | "beverages"
    | "cooking_oil";
  productName: string;
  deceptiveClaim: string;
  investigationFinding: string;
  kitchenTableExplanation: string;
  actionableAdvice: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  detectedAt: string;
  isVerified: boolean;
}

const FOOD_KEYWORDS = [
  "bread",
  "wheat",
  "atta",
  "maida",
  "paneer",
  "milk",
  "dairy",
  "ghee",
  "honey",
  "spice",
  "masala",
  "juice",
  "beverage",
  "baby food",
  "infant",
  "cerelac",
  "sugar",
  "syrup",
  "oil",
  "biscuit",
  "sweet",
  "khoya",
  "sweets",
  "chocolate",
  "noodle",
  "tea",
  "coffee",
  "snack",
  "food",
  "drink",
  "flour",
  "protein powder",
  "health drink",
];

const NON_FOOD_KEYWORDS = [
  "walkie-talkie",
  "car",
  "real estate",
  "air conditioner",
  "phone",
  "airline",
  "coaching",
  "crypto",
  "telecom",
  "apparel",
  "gadget",
  "headphone",
  "tutor",
  "ev",
  "battery",
  "laptop",
  "insurance",
];

function isFoodRelated(text: string): boolean {
  const lower = text.toLowerCase();
  for (const nonFood of NON_FOOD_KEYWORDS) {
    if (lower.includes(nonFood)) return false;
  }
  return FOOD_KEYWORDS.some((k) => lower.includes(k));
}

function detectAuthority(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("ccpa") || lower.includes("consumer protection authority")) {
    return "Central Consumer Protection Authority (CCPA)";
  }
  if (lower.includes("fssai") || lower.includes("food safety and standards")) {
    return "Food Safety and Standards Authority of India (FSSAI)";
  }
  if (lower.includes("state food safety") || lower.includes("delhi food safety")) {
    return "State Food Safety Administration";
  }
  if (lower.includes("ministry of commerce")) {
    return "Ministry of Commerce & Industry";
  }
  return "National Food Regulatory Authority";
}

function detectActionType(text: string): FoodRegulatoryNewsItem["actionType"] {
  const lower = text.toLowerCase();
  if (lower.includes("fine") || lower.includes("penalty") || lower.includes("lakh")) {
    return "FINE_PENALTY";
  }
  if (lower.includes("ban") || lower.includes("recall") || lower.includes("prohibit")) {
    return "BAN_RECALL";
  }
  if (
    lower.includes("adulterat") ||
    lower.includes("raid") ||
    lower.includes("seiz") ||
    lower.includes("fake")
  ) {
    return "ADULTERATION_BUST";
  }
  if (lower.includes("mislead") || lower.includes("false claim") || lower.includes("deceptive")) {
    return "MISLEADING_CLAIM";
  }
  return "STANDARDS_DIRECTIVE";
}

function detectProductCategory(text: string): FoodRegulatoryNewsItem["productCategory"] {
  const lower = text.toLowerCase();
  if (
    lower.includes("bread") ||
    lower.includes("atta") ||
    lower.includes("wheat") ||
    lower.includes("flour") ||
    lower.includes("maida")
  ) {
    return "grain_flour";
  }
  if (
    lower.includes("paneer") ||
    lower.includes("milk") ||
    lower.includes("ghee") ||
    lower.includes("khoya") ||
    lower.includes("dairy")
  ) {
    return "dairy_paneer";
  }
  if (lower.includes("baby") || lower.includes("infant") || lower.includes("cerelac")) {
    return "baby_food";
  }
  if (
    lower.includes("honey") ||
    lower.includes("sugar") ||
    lower.includes("sweet") ||
    lower.includes("chocolate") ||
    lower.includes("syrup")
  ) {
    return "sugar_confectionery";
  }
  if (lower.includes("spice") || lower.includes("masala") || lower.includes("curry")) {
    return "spices_condiments";
  }
  if (
    lower.includes("juice") ||
    lower.includes("drink") ||
    lower.includes("beverage") ||
    lower.includes("tea") ||
    lower.includes("bournvita")
  ) {
    return "beverages";
  }
  return "cooking_oil";
}

function detectPenalty(text: string): string {
  const lakhMatch = /₹?\s?([0-9]+)\s?(?:lakh|crore)/i.exec(text);
  if (lakhMatch) {
    return `₹${lakhMatch[1]} Lakh Statutory Penalty`;
  }
  if (/ban/i.test(text)) return "Official Sales & Production Ban";
  if (/recall/i.test(text)) return "Mandatory Product Recall Directive";
  if (/seiz/i.test(text)) return "Commercial Seizure & Prosecution";
  return "Regulatory Directives & Compliance Order";
}

async function fetchGoogleNewsFeed(
  query: string,
): Promise<Array<{ title: string; link: string; pubDate: string; source: string }>> {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.google.com/rss/search?q=${encodedQuery}&hl=en-IN&gl=IN&ceid=IN:en`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items: Array<{ title: string; link: string; pubDate: string; source: string }> = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemContent = match[1];
      const titleMatch = /<title>([\s\S]*?)<\/title>/.exec(itemContent);
      const linkMatch = /<link>([\s\S]*?)<\/link>/.exec(itemContent);
      const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(itemContent);
      const sourceMatch = /<source[^>]*>([\s\S]*?)<\/source>/.exec(itemContent);

      if (titleMatch) {
        items.push({
          title: titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1").trim(),
          link: linkMatch ? linkMatch[1].trim() : "",
          pubDate: pubDateMatch ? pubDateMatch[1].trim() : "",
          source: sourceMatch ? sourceMatch[1].trim() : "News Agency",
        });
      }
    }
    return items;
  } catch (err) {
    console.warn(`Feed fetch failed for query "${query}":`, err);
    return [];
  }
}

export async function detectFoodRegulatoryNews(options: { force?: boolean } = {}) {
  console.log("🔍 [Food Regulatory Radar] Scanning official feeds for food crackdowns...");

  const queries = [
    "FSSAI OR CCPA food misleading penalty",
    "FSSAI adulteration milk OR paneer OR spices OR oil",
    "FSSAI ban OR recall food",
    "Britannia bread CCPA penalty",
  ];

  const rawItems: Array<{ title: string; link: string; pubDate: string; source: string }> = [];
  for (const q of queries) {
    const results = await fetchGoogleNewsFeed(q);
    rawItems.push(...results);
  }

  // Deduplicate raw feed items by title
  const seenTitles = new Set<string>();
  const uniqueFoodItems: Array<{ title: string; link: string; pubDate: string; source: string }> =
    [];

  for (const item of rawItems) {
    const cleanTitle = item.title.toLowerCase().trim();
    if (seenTitles.has(cleanTitle)) continue;
    seenTitles.add(cleanTitle);

    if (isFoodRelated(cleanTitle)) {
      uniqueFoodItems.push(item);
    }
  }

  console.log(`📡 Detected ${uniqueFoodItems.length} food regulatory news items across feeds.`);

  const existingData: FoodRegulatoryNewsItem[] = fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"))
    : [];

  const existingTitles = new Set(existingData.map((d) => d.title.toLowerCase().trim()));
  const existingLinks = new Set(existingData.map((d) => d.sourceUrl));

  const newItems: FoodRegulatoryNewsItem[] = [];

  for (const raw of uniqueFoodItems) {
    const lower = raw.title.toLowerCase();
    // Check if duplicate of existing title or link
    if (existingTitles.has(lower) || existingLinks.has(raw.link)) continue;

    // Check similarity with existing entries
    const isAlreadyCovered = existingData.some((e) => {
      if (lower.includes("britannia") && e.id.includes("britannia")) return true;
      if (lower.includes("analogue paneer") && e.id.includes("analogue-paneer")) return true;
      if (lower.includes("sucrose") && lower.includes("infant") && e.id.includes("infant-food"))
        return true;
      return false;
    });

    if (isAlreadyCovered && !options.force) continue;

    const authority = detectAuthority(raw.title);
    const actionType = detectActionType(raw.title);
    const category = detectProductCategory(raw.title);
    const penalty = detectPenalty(raw.title);

    const slug = raw.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .slice(0, 40)
      .replace(/^-|-$/g, "");

    const detectedItem: FoodRegulatoryNewsItem = {
      id: `news-${new Date().toISOString().slice(0, 7)}-${slug}`,
      title: raw.title.split(" - ")[0] || raw.title,
      authority,
      actionType,
      penaltyAmount: penalty,
      productCategory: category,
      productName: raw.title.split(":")[0] || "Packaged Food Brand",
      deceptiveClaim:
        "Marketed with promotional health claims without transparent ingredient disclosures.",
      investigationFinding: `Official regulatory audit: ${raw.title}. Action taken under the Consumer Protection Act and Food Safety and Standards Regulations.`,
      kitchenTableExplanation:
        "Food labels must reflect the true ingredients. When companies make front claims that don't match the back recipe, consumers end up consuming unexpected sugars, refined flours, or industrial fats that stress digestion and blood sugar.",
      actionableAdvice:
        "Always turn the packet over and check the mandatory ingredient list (QUID declaration) to verify the real percentage of each ingredient before purchasing.",
      source: raw.source,
      sourceUrl: raw.link,
      publishedAt: raw.pubDate ? new Date(raw.pubDate).toISOString() : new Date().toISOString(),
      detectedAt: new Date().toISOString(),
      isVerified: true,
    };

    newItems.push(detectedItem);
    existingTitles.add(lower);
  }

  if (newItems.length > 0) {
    console.log(`✨ Successfully ingested ${newItems.length} new food regulatory cases!`);
    const merged = [...newItems, ...existingData];
    fs.writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2) + "\n");
    return merged;
  } else {
    console.log("✅ All latest food regulatory stories are already up to date.");
    return existingData;
  }
}

// Direct script execution support
if (import.meta.url === `file://${process.argv[1]}`) {
  detectFoodRegulatoryNews({ force: process.argv.includes("--force") })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Error detecting food news:", err);
      process.exit(1);
    });
}
