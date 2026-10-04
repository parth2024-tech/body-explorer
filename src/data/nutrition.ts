// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Food Facts & Clinical Nutrition Database
// What Each Food Really Does: Nutrients, Proven Benefits, Myth Checks,
// Situational Guidance, and Clinical Exclusions for Indian Foods.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type NutritionLevel = 1 | 2 | 3 | 4;

export interface NutritionLevelMeta {
  level: NutritionLevel;
  title: string;
  tagline: string;
  description: string;
  targetShare: string;
  badgeClass: string;
  borderClass: string;
  bgClass: string;
  accentColor: string;
  recommendation: string;
}

export const NUTRITION_LEVELS: Record<NutritionLevel, NutritionLevelMeta> = {
  1: {
    level: 1,
    title: "Level 1: Natural Whole Foods",
    tagline: "Fresh Fruits, Vegetables & Greens (Eat Generously)",
    description:
      "Fresh, unprocessed foods directly from nature. Packed with natural water, vitamins, and gentle fiber that keep you full without excess calories.",
    targetShare: "60% - 70% of intake",
    badgeClass: "bg-teal-500/20 text-teal-300 border-teal-500/40",
    borderClass: "border-teal-500/30 hover:border-teal-500/60",
    bgClass: "bg-teal-500/5",
    accentColor: "#00E5C4",
    recommendation: "Your daily base. Make colorful vegetables and fresh fruits half your plate.",
  },
  2: {
    level: 2,
    title: "Level 2: Whole Grains & Staples",
    tagline: "Millets, Dal, Curd & Eggs (Eat Every Meal)",
    description:
      "Wholesome grains, lentils, and traditional dairy. Digested slowly by your stomach to give steady, clean energy throughout the day without crashes.",
    targetShare: "25% - 30% of intake",
    badgeClass: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    borderClass: "border-sky-500/30 hover:border-sky-500/60",
    bgClass: "bg-sky-500/5",
    accentColor: "#38BDF8",
    recommendation: "Essential for all-day energy, strong muscles, and healthy digestion.",
  },
  3: {
    level: 3,
    title: "Level 3: Cooking Fats & Natural Sweets",
    tagline: "Ghee, Oils, Jaggery & Pickles (Eat in Small Spoons)",
    description:
      "Concentrated culinary ingredients like cooking oils, ghee, jaggery, and achaar. Very high in energy, so enjoy them in measured, modest spoonfuls.",
    targetShare: "< 10% - 15% of intake",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    borderClass: "border-amber-500/30 hover:border-amber-500/60",
    bgClass: "bg-amber-500/5",
    accentColor: "#F5A623",
    recommendation: "Use a small spoon to measure cooking fats and sweet treats.",
  },
  4: {
    level: 4,
    title: "Level 4: Factory Packaged Snacks",
    tagline: "Sodas, Chips & Instant Noodles (Eat Rarely)",
    description:
      "Heavily processed factory foods made with refined flour, hidden sugars, and palm oil. They trick your brain into overeating and cause quick sugar spikes.",
    targetShare: "Strictly minimize (< 5%)",
    badgeClass: "bg-red-500/20 text-red-300 border-red-500/40",
    borderClass: "border-red-500/30 hover:border-red-500/60",
    bgClass: "bg-red-500/5",
    accentColor: "#FC3D21",
    recommendation: "Swap with whole-food crunchy snacks like roasted chana or makhana.",
  },
};

export interface NutritionLevelTipFact {
  id: string;
  level: NutritionLevel;
  type: "fact" | "tip";
  title: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  takeaway: {
    en: string;
    hi: string;
  };
  readingGrade: string;
}

export const NUTRITION_LEVEL_TIPS_FACTS: NutritionLevelTipFact[] = [
  // ─── Level 1: Foundational Whole Foods ───
  {
    id: "lvl1-fact-water-fiber",
    level: 1,
    type: "fact",
    title: {
      en: "Natural Water & Fiber Keep You Full",
      hi: "प्राकृतिक पानी और फाइबर पेट भरा रखते हैं",
    },
    content: {
      en: "Fresh vegetables and fruits are over 80% natural water and gentle fiber. They fill your belly comfortably without packing on unnecessary calories or artificial chemicals.",
      hi: "ताजी सब्जियां और फल ज्यादातर प्राकृतिक पानी और फाइबर से भरे होते हैं। ये बिना गैर-जरूरी कैलोरी या केमिकल के आपका पेट आराम से भर देते हैं।",
    },
    takeaway: {
      en: "Eat a hearty bowl of veggies without worrying about unwanted weight.",
      hi: "वजन बढ़ने की चिंता किए बिना आप एक बड़ी कटोरी भरकर खा सकते हैं।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl1-tip-half-plate",
    level: 1,
    type: "tip",
    title: {
      en: "The Easy Half-Plate Rule",
      hi: "आधी थाली का आसान नियम",
    },
    content: {
      en: "When serving lunch or dinner, fill half your plate with colorful vegetables or a fresh salad first, before adding rice, dal, or roti.",
      hi: "दोपहर या रात के खाने में सबसे पहले आधी थाली रंग-बिरंगी सब्जियों या सलाद से भरें, उसके बाद दाल, रोटी या चावल लें।",
    },
    takeaway: {
      en: "Stops blood sugar spikes and keeps you from overeating naturally.",
      hi: "यह शुगर को तेजी से बढ़ने से रोकता है और ज्यादा खाने से बचाता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl1-fact-color-vitamins",
    level: 1,
    type: "fact",
    title: {
      en: "Bright Colors Mean Real Plant Shields",
      hi: "सब्जियों के चटक रंग ही उनके असली विटामिन हैं",
    },
    content: {
      en: "The deep red of tomatoes, bright orange of carrots, and dark green of spinach come from natural protective shields that keep your heart and cells healthy as you age.",
      hi: "टमाटर का लाल रंग, गाजर का नारंगी रंग और पालक का हरा रंग प्राकृतिक रक्षक तत्वों से आता है जो आपके दिल और शरीर को स्वस्थ रखते हैं।",
    },
    takeaway: {
      en: "Eating a rainbow of natural colors gives your body complete defense.",
      hi: "हफ्ते भर अलग-अलग रंगों की सब्जियां खाने से शरीर को सभी जरूरी पोषक तत्व मिलते हैं।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl1-tip-gentle-cooking",
    level: 1,
    type: "tip",
    title: {
      en: "Steam or Sauté, Don't Boil Away Nutrients",
      hi: "हल्का भाप में पकाएं, पानी फेंकने से बचें",
    },
    content: {
      en: "Boiling vegetables in heavy water and throwing the liquid away washes away Vitamin C and B. Instead, lightly steam them or sauté with a few drops of oil.",
      hi: "सब्जियों को बहुत ज्यादा पानी में उबालकर पानी फेंकने से उनके विटामिन नष्ट हो जाते हैं। उन्हें हल्का भाप में पकाएं या थोड़े तेल में हल्का भूनें।",
    },
    takeaway: {
      en: "Veggies should stay slightly crunchy and vibrant on your plate.",
      hi: "पकने के बाद भी सब्जियों का रंग चटक और स्वाद कुरकुरा रहना चाहिए।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 2: Whole Grains & Staples ───
  {
    id: "lvl2-fact-steady-energy",
    level: 2,
    type: "fact",
    title: {
      en: "Clean Energy for 3 to 4 Hours",
      hi: "3 से 4 घंटे तक लगातार मिलती है ऊर्जा",
    },
    content: {
      en: "Whole grains like bajra, oats, brown rice, and lentils take hours for your belly to digest. They release slow, steady energy without sudden sugar crashes.",
      hi: "बाजरा, ओट्स, दालें और साबुत अनाज पचने में थोड़ा समय लेते हैं। इससे शरीर को बिना थकावट के धीरे-धीरे और लगातार ताकत मिलती रहती है।",
    },
    takeaway: {
      en: "Keeps you energized and alert all through the afternoon.",
      hi: "दोपहर के खाने के बाद सुस्ती या नींद आने से बचाता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl2-tip-soaking-secret",
    level: 2,
    type: "tip",
    title: {
      en: "Soak Dal and Millets Before Cooking",
      hi: "पकाने से पहले दाल और मिलेट्स को जरूर भिगोएं",
    },
    content: {
      en: "Soaking dry lentils and millets in water for 4 to 8 hours washes away plant blockers that cause gas and bloating, making iron much easier to absorb.",
      hi: "दालों और मिलेट्स को 4 से 8 घंटे पानी में भिगोकर रखने से गैस और पेट फूलने की समस्या खत्म होती है और शरीर ज्यादा आयरन सोख पाता है।",
    },
    takeaway: {
      en: "Makes home-cooked meals feel light and easy on your stomach.",
      hi: "खाना पेट के लिए हल्का और सुपाच्य बन जाता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl2-fact-dal-rice-protein",
    level: 2,
    type: "fact",
    title: {
      en: "Dal + Rice Creates a Complete Protein",
      hi: "दाल और चावल मिलकर बनाते हैं पूरा प्रोटीन",
    },
    content: {
      en: "Rice is low in one protein building block, while lentils are low in another. Eating them together in a meal joins them into a 100% complete protein just like milk or eggs.",
      hi: "चावल में एक जरूरी प्रोटीन ब्लॉक कम होता है और दाल में दूसरा। जब आप दोनों साथ खाते हैं, तो दूध या अंडे जैसा पूरा प्रोटीन तैयार हो जाता है।",
    },
    takeaway: {
      en: "Traditional Indian khichdi or dal-chawal is already a complete muscle food.",
      hi: "दाल-चावल या खिचड़ी शाकाहारी लोगों के लिए संपूर्ण प्रोटीन का उत्तम स्रोत है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl2-tip-curd-timing",
    level: 2,
    type: "tip",
    title: {
      en: "Have Fresh Curd or Chaas with Lunch",
      hi: "दोपहर के भोजन के साथ ताजी छाछ या दही लें",
    },
    content: {
      en: "Natural fermentation creates billions of friendly bacteria that help digest heavy grains. Whisk 1 cup curd with water, roasted cumin, and black salt.",
      hi: "दही में अरबों अच्छे बैक्टीरिया होते हैं जो भोजन पचाने में मदद करते हैं। एक कटोरी दही या भुने जीरे वाली छाछ दोपहर में जरूर लें।",
    },
    takeaway: {
      en: "Soothes your stomach and cools natural acidity.",
      hi: "पेट की गर्मी शांत करता है और पाचन को दुरुस्त रखता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 3: Cooking Fats & Natural Sweets ───
  {
    id: "lvl3-fact-spoon-calories",
    level: 3,
    type: "fact",
    title: {
      en: "One Spoon of Oil Packs 120 Calories",
      hi: "एक चम्मच तेल में होती हैं 120 कैलोरी",
    },
    content: {
      en: "Cooking oils and desi ghee are concentrated energy. A single tablespoon contains as many calories as a whole bowl of vegetables or a medium roti.",
      hi: "तेल और देसी घी ऊर्जा का बहुत गाढ़ा रूप हैं। सिर्फ एक बड़ा चम्मच तेल उतनी ही कैलोरी देता है जितनी एक पूरी कटोरी सब्जी या एक रोटी।",
    },
    takeaway: {
      en: "Healthy fats are essential, but a little spoon goes a very long way.",
      hi: "अच्छी वसा जरूरी है, लेकिन थोड़ी सी मात्रा ही काफी होती है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl3-tip-spoon-measurement",
    level: 3,
    type: "tip",
    title: {
      en: "Use a Small Spoon, Don't Pour Freehand",
      hi: "तेल हमेशा छोटी चम्मच से नापें, बोतल से सीधे न डालें",
    },
    content: {
      en: "When tempering tadka or sautéing, measure 1 to 2 small teaspoons per person instead of tilting the oil bottle. This saves 200–300 hidden calories without changing taste.",
      hi: "सब्जी या तड़का बनाते समय प्रति व्यक्ति 1-2 छोटी चम्मच तेल नापकर डालें। इससे स्वाद में बिना किसी कमी के रोज 200-300 अतिरिक्त कैलोरी बचती हैं।",
    },
    takeaway: {
      en: "An effortless trick to maintain a healthy weight and light heart.",
      hi: "वजन और कोलेस्ट्रॉल नियंत्रित रखने का सबसे आसान उपाय।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl3-fact-jaggery-sugar",
    level: 3,
    type: "fact",
    title: {
      en: "Desi Jaggery (Gur) Still Raises Blood Sugar",
      hi: "देसी गुड़ भी खून में तेजी से शुगर बढ़ाता है",
    },
    content: {
      en: "While unrefined jaggery is free of white sugar bleach chemicals and carries small minerals, it is still 80% sugar and enters your blood nearly as fast as table sugar.",
      hi: "यद्यपि गुड़ में केमिकल नहीं होते और कुछ खनिज होते हैं, फिर भी यह 80% चीनी ही है और सफेद चीनी की तरह ही तेजी से खून में शुगर बढ़ाता है।",
    },
    takeaway: {
      en: "Eat a small bite after food for taste, but never treat it as sugar-free.",
      hi: "स्वाद के लिए एक छोटा टुकड़ा ठीक है, लेकिन इसे शुगर-फ्री समझकर अधिक न खाएं।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl3-tip-achaar-moderation",
    level: 3,
    type: "tip",
    title: {
      en: "Take the Vegetable Piece, Leave the Salty Oil",
      hi: "अचार का टुकड़ा लें, नीचे जमा खारा तेल छोड़ दें",
    },
    content: {
      en: "Sun-fermented achaar is packed with gut-friendly microbes, but the oil and salt at the bottom are very concentrated. Take just 1 small piece of mango or chili.",
      hi: "धूप में पका पारंपरिक अचार पेट के लिए अच्छा है, लेकिन नीचे का तेल और नमक बहुत गाढ़ा होता है। सिर्फ एक छोटा टुकड़ा लें और अधिक तेल न लें।",
    },
    takeaway: {
      en: "You get delicious probiotic tang without spiking your blood pressure.",
      hi: "ब्लड प्रेशर बढ़ाए बिना आपको अचार का पूरा स्वाद और फायदा मिलता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 4: Factory Packaged Snacks ───
  {
    id: "lvl4-fact-bliss-point",
    level: 4,
    type: "fact",
    title: {
      en: "Factory Snacks Are Made to Trick Your Brain",
      hi: "पैकेटबंद स्नैक्स दिमाग को धोखा देने के लिए बने हैं",
    },
    content: {
      en: "Industrial snacks blend refined white flour, palm oil, salt, and flavor enhancers in exact lab ratios that block your brain's natural fullness signal.",
      hi: "कंपनियां पैकेट वाले चिप्स और बिस्कुट में मैदा, पाम ऑयल और नमक इस तरह मिलाती हैं कि पेट भरने के बाद भी दिमाग का रुकने का सिग्नल बंद हो जाता है।",
    },
    takeaway: {
      en: "It is not your fault—these foods are engineered to make you overeat.",
      hi: "यह आपकी कमजोरी नहीं है—ये खाद्य पदार्थ बनाए ही ऐसे जाते हैं कि आप खाते रहें।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl4-tip-kitchen-cupboard",
    level: 4,
    type: "tip",
    title: {
      en: "The 5-Ingredient Kitchen Cupboard Rule",
      hi: "5 सामग्री का सरल किचन नियम",
    },
    content: {
      en: "Flip the food box and scan the ingredient list. If it has more than 5 ingredients, or chemical names you would never cook with at home (like maltodextrin or emulsifiers), eat it only occasionally.",
      hi: "पैकेट के पीछे लिखी सामग्री पढ़ें। अगर उसमें 5 से ज्यादा चीजें हैं या ऐसे रासायनिक नाम हैं जो आपकी रसोई में नहीं होते, तो इसे रोज का भोजन न बनाएं।",
    },
    takeaway: {
      en: "If your grandmother wouldn't recognize it as food, enjoy it as a rare treat.",
      hi: "जो चीजें दादी-नानी के जमाने में नहीं थीं, उन्हें कभी-कभार ही खाएं।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl4-fact-liquid-sugar",
    level: 4,
    type: "fact",
    title: {
      en: "Liquid Sugar in Bottled Drinks Hits Instantly",
      hi: "बोतलबंद मीठे पेय की चीनी तुरंत खून में घुलती है",
    },
    content: {
      en: "Packaged juices, energy drinks, and fizzy colas have zero fiber. Their 6 to 8 teaspoons of sugar dump straight into your bloodstream in minutes, stressing your liver.",
      hi: "डिब्बाबंद जूस और कोल्ड ड्रिंक्स में कोई फाइबर नहीं होता। इनमें मौजूद 6 से 8 चम्मच चीनी कुछ ही मिनटों में सीधे खून और लिवर पर दबाव डालती है।",
    },
    takeaway: {
      en: "A whole fruit with natural fiber is 10 times healthier than boxed juice.",
      hi: "डिब्बाबंद जूस के बजाय पूरा फल चबाकर खाना 10 गुना ज्यादा फायदेमंद है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl4-tip-smart-crunchy-swaps",
    level: 4,
    type: "tip",
    title: {
      en: "Crunchy Healthy Swaps for Tea Time",
      hi: "शाम की चाय के साथ कुरकुरे और पौष्टिक विकल्प",
    },
    content: {
      en: "Craving something crispy? Swap fried potato chips for roasted chana, roasted makhana (fox nuts) with turmeric and a pinch of salt, or roasted peanuts.",
      hi: "शाम को चाय के साथ कुरकुरा खाने का मन हो तो तले हुए चिप्स की जगह भुने चने, हल्दी-नमक वाले मखाने या भुनी मूंगफली खाएं।",
    },
    takeaway: {
      en: "Gives you real protein, fiber, and crisp satisfaction without factory palm oil.",
      hi: "शरीर को असली प्रोटीन और फाइबर मिलता है, बिना किसी मिलावटी तेल के।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 1 Additions ───
  {
    id: "lvl1-fact-cooked-tomato-lycopene",
    level: 1,
    type: "fact",
    title: {
      en: "Cooking Tomatoes in Oil Unlocks Heart Shields",
      hi: "तेल में पका टमाटर दिल के लिए 4 गुना बेहतर है",
    },
    content: {
      en: "Lycopene is the deep red antioxidant in tomatoes that protects heart arteries. Raw tomatoes only release a little, but gently heating them with a drop of mustard oil or ghee boosts absorption by up to 400%.",
      hi: "टमाटर का लाल रंग दिल की नसों को सुरक्षित रखने वाला तत्व है। कच्चे टमाटर की तुलना में थोड़े से तेल या घी में पकाने पर शरीर इसे 4 गुना बेहतर तरीके से सोख पाता है।",
    },
    takeaway: {
      en: "Warm tomato gravies and rasam give your heart far stronger protection than raw salads.",
      hi: "कच्चे सलाद की जगह पकी हुई टमाटर की ग्रेवी या रसम दिल को ज्यादा सुरक्षा देती है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl1-tip-whole-fruit-vs-juice",
    level: 1,
    type: "tip",
    title: {
      en: "Eat Whole Fruit, Don't Drink Fruit Juice",
      hi: "फल पूरा चबाकर खाएं, डिब्बाबंद जूस से बचें",
    },
    content: {
      en: "Juicing an orange strips away its fibrous 'brakes', dumping 5 teaspoons of liquid sugar straight into your blood. Eating the whole fruit keeps digestion slow and feeds friendly gut bacteria.",
      hi: "संतरे या सेब का जूस निकालने से उसका फाइबर निकल जाता है, जिससे सारी चीनी तुरंत खून में पहुंच जाती है। पूरा फल चबाने से शुगर स्थिर रहती है।",
    },
    takeaway: {
      en: "Natural fiber acts like a speed breaker for sugar in your stomach.",
      hi: "प्राकृतिक फाइबर आपके पेट में शुगर की रफ्तार पर ब्रेक लगाने का काम करता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 2 Additions ───
  {
    id: "lvl2-fact-sprouting-doubles-vitamins",
    level: 2,
    type: "fact",
    title: {
      en: "Sprouting Multiplies Vitamins and Cuts Gas",
      hi: "अंकुरित करने से विटामिन चार गुना और गैस खत्म",
    },
    content: {
      en: "Soaking and sprouting green moong or chana for 24 hours quadruples Vitamin C, makes iron 3 times easier to absorb, and breaks down hard starches so your belly stays completely flat without gas.",
      hi: "हरी मूंग या चने को 24 घंटे भिगोकर अंकुरित करने से विटामिन C चार गुना बढ़ जाता है, आयरन आसानी से पचता है और पेट फूलने की समस्या खत्म हो जाती है।",
    },
    takeaway: {
      en: "Sprouting turns everyday beans into living, easy-to-digest powerhouses.",
      hi: "अंकुरित दालें सामान्य दालों से कहीं ज्यादा हल्की और ऊर्जावान बन जाती हैं।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl2-tip-rotate-grains",
    level: 2,
    type: "tip",
    title: {
      en: "Rotate 3 Grains Instead of Eating Only Wheat",
      hi: "सिर्फ गेहूं नहीं, हफ्ते में 3 अनाज बदलकर खाएं",
    },
    content: {
      en: "Eating only wheat every single day can make digestion sluggish. Rotate your plate: enjoy light Jowar for lunch, warming Bajra in winters, and calcium-rich Ragi for dinner. Different grains build a stronger, happier gut.",
      hi: "रोज केवल गेहूं खाने के बजाय हफ्ते में बाजरा, ज्वार और रागी बदलकर खाएं। अलग-अलग अनाजों से पेट के अच्छे बैक्टीरिया बढ़ते हैं और पाचन मजबूत होता है।",
    },
    takeaway: {
      en: "Variety in grains is the true secret of traditional Indian digestive health.",
      hi: "अलग-अलग अनाजों का इस्तेमाल ही मजबूत पाचन की असली चाबी है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 3 Additions ───
  {
    id: "lvl3-fact-ghee-vitamin-carrier",
    level: 3,
    type: "fact",
    title: {
      en: "1 Spoon of Ghee Unlocks Essential Vitamins",
      hi: "1 चम्मच घी चार जरूरी विटामिनों को सोखने में मदद करता है",
    },
    content: {
      en: "Vitamins A, D, E, and K in green leaves and carrots cannot dissolve in water. Your body needs a teaspoon of healthy fat like desi ghee to carry these vitamins from your food into your bloodstream.",
      hi: "पालक और गाजर के विटामिन A, D, E और K पानी में नहीं घुलते। इन्हें शरीर में पहुंचाने के लिए देसी घी या तेल की एक छोटी चम्मच बहुत जरूरी होती है।",
    },
    takeaway: {
      en: "A touch of pure ghee on hot dal is real medicine, not just flavor.",
      hi: "दाल में एक चम्मच शुद्ध घी डालना केवल स्वाद नहीं, बल्कि पोषण की जरूरत है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl3-tip-dry-roast-seeds",
    level: 3,
    type: "tip",
    title: {
      en: "Dry-Roast Seeds Instead of Deep-Frying Snacks",
      hi: "तले नमकीन की जगह भुने बीजों का कुरकुरा नाश्ता लें",
    },
    content: {
      en: "Instead of fried mixtures and namkeen dripping with palm oil, lightly dry-roast pumpkin seeds, flaxseeds, and sunflower seeds with a pinch of black salt and turmeric. You get crunchy satisfaction with heart-protecting omega fats.",
      hi: "पाम ऑयल में तली भुजिया और नमकीन के बजाय कद्दू के बीज, अलसी और सूरजमुखी के बीज भूनकर खाएं। इससे कुरकुरा स्वाद और दिल को अच्छी वसा मिलती है।",
    },
    takeaway: {
      en: "Satisfies your salty crunch craving while protecting your heart arteries.",
      hi: "बिना नसों को नुकसान पहुंचाए शाम की चाय के साथ कुरकुरा स्वाद मिलता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 4 Additions ───
  {
    id: "lvl4-fact-hidden-salt-in-sweets",
    level: 4,
    type: "fact",
    title: {
      en: "Sweet Bakery Biscuits Hide Surprisingly High Salt",
      hi: "मीठे बिस्कुट और टोस्ट में छिपा होता है बहुत सारा नमक",
    },
    content: {
      en: "Even biscuits that taste sweet hide high levels of baking soda and sodium to balance flavors and extend shelf life. Eating 4 packaged biscuits can quietly give you a quarter of your entire daily salt limit.",
      hi: "मीठे लगने वाले बिस्कुट और रस्क में भी स्वाद और बेकिंग के लिए काफी मात्रा में नमक और सोडा मिलाया जाता है, जो चुपचाप ब्लड प्रेशर बढ़ा सकता है।",
    },
    takeaway: {
      en: "Don't judge salt by sweet taste alone—always check sodium on the label.",
      hi: "केवल मीठे स्वाद पर न जाएं, पैकेट के पीछे सोडियम (नमक) की मात्रा जरूर देखें।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl4-tip-check-serving-size",
    level: 4,
    type: "tip",
    title: {
      en: "Check the True Serving Size on the Packet",
      hi: "पैकेट के पीछे लिखी 'सर्विंग साइज' जरूर जांचें",
    },
    content: {
      en: "Manufacturers often list calories and fat for 'half a packet' or 'just 3 cookies' to make numbers look healthy. But most people finish the whole bag. Multiply the numbers by the real amount you eat.",
      hi: "अक्सर कंपनियां कैलोरी और फैट सिर्फ 2-3 बिस्कुट के हिसाब से लिखती हैं ताकि नंबर कम दिखें, जबकि आप पूरा पैकेट खा जाते हैं। हमेशा पूरे पैकेट का हिसाब जोड़ें।",
    },
    takeaway: {
      en: "Knowing what 1 serving really means protects you from eating 3 meals of calories in 1 snack.",
      hi: "असली मात्रा जानने से आप अनजाने में सैकड़ों अतिरिक्त कैलोरी खाने से बच जाते हैं।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 1: More Facts & Tips ───
  {
    id: "lvl1-fact-raw-onion-quercetin",
    level: 1,
    type: "fact",
    title: {
      en: "Raw Onion with Summer Lunch Shields Against Sunstroke",
      hi: "दोपहर के खाने के साथ कच्चा प्याज लू से बचाता है",
    },
    content: {
      en: "Raw red onion is packed with quercetin, a natural plant shield that keeps your body temperature stable and prevents heat exhaustion during dry Indian summers.",
      hi: "कच्चे लाल प्याज में क्वेर्सेटिन नामक प्राकृतिक तत्व होता है जो शरीर का तापमान स्थिर रखता है और गर्मियों में लू (हीट स्ट्रोक) लगने से बचाता है।",
    },
    takeaway: {
      en: "A slice of raw onion with lemon is traditional Indian summer medicine.",
      hi: "नींबू लगा कच्चा प्याज लू से बचने की सबसे असरदार घरेलू दवा है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl1-tip-salt-water-greens-wash",
    level: 1,
    type: "tip",
    title: {
      en: "Wash Leafy Greens in Light Salt Water",
      hi: "हरी पत्तेदार सब्जियों को हल्के नमक वाले पानी में धोएं",
    },
    content: {
      en: "Spinach, methi, and coriander often carry invisible surface parasites and farm sprays. Soaking them for 10 minutes in water with 1 teaspoon of rock salt removes over 80% of surface residues.",
      hi: "पालक, मेथी और धनिए को 10 मिनट के लिए हल्के नमक वाले पानी में भिगोकर धोने से धूल, कीटाणु और हानिकारक कीटनाशक आसानी से साफ हो जाते हैं।",
    },
    takeaway: {
      en: "Takes 10 minutes but keeps your liver and kidneys safe from chemical residues.",
      hi: "सब्जियों को रसायनों से सुरक्षित रखने का सबसे आसान उपाय।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 2: More Facts & Tips ───
  {
    id: "lvl2-fact-cooling-rice-resistant-starch",
    level: 2,
    type: "fact",
    title: {
      en: "Cooling Cooked Rice Cuts Its Sugar Spike by 20%",
      hi: "पके चावल को ठंडा करने से शुगर का असर 20% कम हो जाता है",
    },
    content: {
      en: "When freshly cooked rice is allowed to cool down, its starch transforms into 'resistant starch'. This starch digests much slower in your stomach, blunting blood sugar spikes and feeding beneficial gut microbes.",
      hi: "पके हुए चावल को ठंडा होने देने से उसका स्टार्च 'रेसिस्टेंट स्टार्च' बन जाता है, जो खून में शुगर की रफ्तार 20% तक धीमी कर देता है और आंतों को मजबूत बनाता है।",
    },
    takeaway: {
      en: "Cooling rice for curd-rice or salads gives smooth, crash-free energy.",
      hi: "दही-चावल या हल्का ठंडा चावल खाने से भोजन के बाद सुस्ती नहीं आती।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl2-tip-no-chai-after-meals",
    level: 2,
    type: "tip",
    title: {
      en: "Don't Drink Hot Chai Right After Lunch or Dinner",
      hi: "भोजन के तुरंत बाद गरम चाय पीने से बचें",
    },
    content: {
      en: "Tea contains dark tannins that bind tightly to the iron in your dal and vegetables like glue, blocking up to 60% of plant iron absorption. Always wait at least 45 minutes after eating.",
      hi: "चाय में मौजूद टैनिन भोजन में मौजूद आयरन (लोहे) को सोखने से रोकते हैं, जिससे खून की कमी हो सकती है। खाना खाने के कम से कम 45 मिनट बाद ही चाय पिएं।",
    },
    takeaway: {
      en: "Waiting 45 minutes after meals keeps your blood iron levels strong.",
      hi: "खाने और चाय के बीच 45 मिनट का अंतर रखने से शरीर को पूरा पोषण मिलता है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 3: More Facts & Tips ───
  {
    id: "lvl3-fact-smoke-point-ghee",
    level: 3,
    type: "fact",
    title: {
      en: "Desi Ghee Does Not Create Toxic Fumes at High Heat",
      hi: "देसी घी तेज आंच पर भी सुरक्षित रहता है",
    },
    content: {
      en: "Refined seed oils break down into irritating free radicals when heated hot for tadka. Pure desi ghee has a very high smoke point (250°C), making it the safest traditional fat for Indian cooking.",
      hi: "रिफाइंड तेल तेज गर्म होने पर हानिकारक तत्वों में बदलने लगते हैं, जबकि शुद्ध देसी घी 250°C की तेज आंच पर भी सुरक्षित रहता है और तड़के के लिए सबसे उत्तम है।",
    },
    takeaway: {
      en: "Ghee is heat-stable, but still measure it with a small spoon.",
      hi: "घी आंच के लिए सुरक्षित है, फिर भी इसे चम्मच से नापकर ही इस्तेमाल करें।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl3-tip-kachi-ghani-oil",
    level: 3,
    type: "tip",
    title: {
      en: "Choose Cold-Pressed (Kachi Ghani) Over Refined Oils",
      hi: "रिफाइंड की जगह कच्ची घानी (कोल्ड-प्रेस्ड) तेल चुनें",
    },
    content: {
      en: "Factory refined oils are bleached with chemicals and heated past 200°C, stripping away natural vitamins. Traditional cold-pressed mustard, sesame, and peanut oils keep all their natural heart shields intact.",
      hi: "फैक्ट्री में रिफाइंड तेल को केमिकल और भारी तापमान से साफ किया जाता है। लकड़ी की कच्ची घानी का तेल प्राकृतिक विटामिनों और सुगंध से भरपूर होता है।",
    },
    takeaway: {
      en: "The rich natural aroma in your mustard or peanut oil is proof of live nutrition.",
      hi: "तेल की प्राकृतिक खुशबू ही उसके असली और शुद्ध होने का प्रमाण है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },

  // ─── Level 4: More Facts & Tips ───
  {
    id: "lvl4-fact-zero-sugar-soda-trap",
    level: 4,
    type: "fact",
    title: {
      en: "The 'Zero Sugar' Diet Soda Trap",
      hi: "'जीरो शुगर' डाइट ड्रिंक्स का खतरनाक भ्रम",
    },
    content: {
      en: "Chemical sweeteners in diet sodas are up to 600 times sweeter than sugar. They trick your tongue and confuse your hunger hormones, often making you crave double the snacks later in the day.",
      hi: "डाइट कोल्ड ड्रिंक में इस्तेमाल होने वाली केमिकल मिठास चीनी से 600 गुना तेज होती है। यह दिमाग को धोखा देती है जिससे कुछ ही घंटों बाद तेज भूख और मीठे की तलब लगती है।",
    },
    takeaway: {
      en: "Diet soda does not help weight; switch to chilled nimbu pani or fresh chaas.",
      hi: "डाइट सोडा वजन नहीं घटाता; इसकी जगह ठंडी छाछ या शिकंजी सबसे बेहतर है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
  {
    id: "lvl4-tip-atta-noodles-label-check",
    level: 4,
    type: "tip",
    title: {
      en: "Check the Ingredients of 'Atta' Noodles",
      hi: "'आटा' नूडल्स के पैकेट के पीछे सामग्री जरूर देखें",
    },
    content: {
      en: "Food packets that advertise 'Made with Whole Wheat Atta' on the front often contain 60% refined white flour (maida) and palm oil on the back. Check that whole wheat is the very first ingredient listed.",
      hi: "पैकेट के आगे 'आटा नूडल्स' लिखा होने पर भी पीछे 60% मैदा और पाम ऑयल हो सकता है। सामग्री में जांचें कि पहला नाम 'साबुत गेहूं' ही हो, न कि मैदा या रिफाइंड आटा।",
    },
    takeaway: {
      en: "Front packet labels are advertising; the back ingredient list is the truth.",
      hi: "पैकेट का अगला हिस्सा प्रचार है, असली सच्चाई पीछे लिखी सामग्री में होती है।",
    },
    readingGrade: "Grade 6 (Plain Language)",
  },
];

export interface FoodFactEntry {
  id: string;
  foodName: string;
  hindiName: string;
  level: NutritionLevel;
  category:
    | "millet"
    | "supergreen"
    | "fat_oil"
    | "sweetener"
    | "fermented"
    | "spice_herb"
    | "vegetable"
    | "seed_nut"
    | "legume"
    | "fruit";
  categoryLabel: string;
  situationTag: string; // e.g., "If you're on BP medication...", "If you're fasting for a festival..."
  system: "gut" | "metabolism" | "heart" | "brain" | "muscle_bone" | "liver";
  systemLabel: string;

  // 1. What it contains (nutrients in plain language)
  whatItContains: string;

  // 2. Proven benefit (with evidence tier and source link)
  provenBenefit: string;
  evidenceTier:
    | "Tier 1 Gold (Clinical Trial / Meta-Analysis)"
    | "Tier 2 Silver (Cohort Studies / ICMR Guidelines)";
  sourceCitation: string;
  sourceUrl: string;

  // 3. Unproven or overhyped claims ("myth check")
  mythCheck: {
    claim: string;
    reality: string;
  };

  // 4. Who should limit it (clinical cautions: kidney disease, meds, pregnancy, etc.)
  whoShouldLimit: string[];

  // 5. Best pairing & Indian-context serving
  bestPairing: string;
  indianServingContext: string;

  // 6. Do / Don't / Ask a doctor if
  guidance: {
    do: string;
    dont: string;
    askDoctorIf: string;
  };

  lastReviewed: string;
  readingGrade: string;

  hi: {
    foodName: string;
    whatItContains: string;
    provenBenefit: string;
    mythClaim: string;
    mythReality: string;
    whoShouldLimit: string;
    bestPairing: string;
    do: string;
    dont: string;
    askDoctorIf: string;
  };
}

// Backwards-compatibility alias
export type FoodTip = FoodFactEntry;

export const FOOD_FACTS: FoodFactEntry[] = [
  {
    id: "food-ragi",
    foodName: "Ragi (Finger Millet / Nachni)",
    hindiName: "रागी / नाचनी",
    level: 1,
    category: "millet",
    categoryLabel: "Ancient Millet",
    situationTag: "If you have prediabetes or bone density concerns...",
    system: "metabolism",
    systemLabel: "Blood Sugar Stability & Strong Bones",
    whatItContains:
      "Packed with natural calcium (over 30 times more than white rice), gentle fiber that digests slowly, and key minerals that keep your bones strong.",
    provenBenefit:
      "Slows down sugar release in your belly to prevent sudden sugar spikes after eating (by up to 28% in studies), while giving your bones and teeth daily calcium.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "ICMR-NIN Indian Food Composition Tables & Journal of Food Science and Technology (PMID: 24497746)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24497746/",
    mythCheck: {
      claim: "Ragi flour can be eaten raw in morning smoothies for accelerated fat loss.",
      reality:
        "Raw ragi contains natural plant blockers that stop your body from soaking up calcium and iron. It must always be soaked, cooked, sprouted, or fermented.",
    },
    whoShouldLimit: [
      "People with severe kidney disease (needs a doctor's limit on potassium and minerals)",
      "People prone to calcium-based kidney stones",
    ],
    bestPairing:
      "Ragi Roti or Mudde paired with protein-rich Sambar or sprouted dal; squeeze fresh lemon juice to maximize non-heme iron uptake.",
    indianServingContext:
      "1-2 medium rotis or 1 small mudde ball (50-60g dry flour) for lunch 3-4 days per week.",
    guidance: {
      do: "Soak flour or ferment ragi batter for 8-12 hours before steaming (idli/dosa) to break down plant blockers and absorb more iron.",
      dont: "Avoid eating heavy ragi dishes right before bedtime if you often get heartburn or acid reflux.",
      askDoctorIf:
        "Ask your doctor if you have reduced kidney function before eating millets every single day.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "रागी (नाचनी)",
      whatItContains:
        "अनाजों में सबसे अधिक कैल्शियम (~344 mg/100g), धीमे पचने वाला फाइबर, पॉलीफेनॉल्स और जरूरी अमीनो एसिड्स।",
      provenBenefit:
        "रक्त में शुगर के अचानक बढ़ने को रोकता है और हड्डियों को प्राकृतिक कैल्शियम प्रदान करता है।",
      mythClaim: "रागी को कच्चा स्मूदी में पीने से तेजी से वजन घटता है।",
      mythReality:
        "कच्ची रागी में फाइटेट्स होते हैं जो कैल्शियम सोखने से रोकते हैं; इसे हमेशा पकाकर या किण्वित करके खाएं।",
      whoShouldLimit: "गंभीर किडनी रोग (CKD) के मरीज और जिन्हें ऑक्सालेट पथरी की समस्या हो।",
      bestPairing: "सांभर, दाल या कढ़ी के साथ रागी रोटी; साथ में नींबू का रस मिलाएं।",
      do: "रागी के आटे को पकाने से पहले कुछ घंटे भिगोएं या खमीर उठाएं ताकि पोषक तत्व आसानी से पचें।",
      dont: "रात को सोने से ठीक पहले भारी रागी का दलिया न खाएं यदि अपच की समस्या रहती है।",
      askDoctorIf:
        "यदि किडनी की बीमारी है, तो पोटैशियम स्तर की जांच के बाद ही डॉक्टर से पूछकर मात्रा तय करें।",
    },
  },
  {
    id: "food-moringa",
    foodName: "Moringa (Drumstick Leaves / Sahjan)",
    hindiName: "सहजन / मोरिंगा",
    level: 1,
    category: "supergreen",
    categoryLabel: "Indigenous Supergreen",
    situationTag: "If you're on blood pressure medication...",
    system: "heart",
    systemLabel: "Blood Vessel & Heart Care",
    whatItContains:
      "Rich in Vitamin C, beta-carotene, heart-friendly plant antioxidants, vegetable protein, potassium, and magnesium.",
    provenBenefit:
      "Helps relax stiff blood vessels, gently brings down high blood pressure numbers (by about 4 to 6 points), and protects your heart cells from daily stress.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "ICMR-NIN Bioactive Research & Phytotherapy Research Clinical Evaluation (PMID: 17089328)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17089328/",
    mythCheck: {
      claim: "Moringa permanently cures 300 diseases and replaces all prescription medications.",
      reality:
        "Moringa is a healthy traditional leafy vegetable, not a miracle cure or replacement for prescription blood pressure or diabetes medicine.",
    },
    whoShouldLimit: [
      "Pregnant women (drumstick roots and bark must be avoided; tender leaves should only be eaten in normal cooking amounts)",
      "Anyone taking prescription thyroid pills or blood thinners (check with your doctor first)",
    ],
    bestPairing:
      "Sauté fresh moringa leaves into yellow moong dal tadka or cook tender pods in traditional rasam with black pepper and 1/2 tsp ghee.",
    indianServingContext:
      "1/2 to 1 cup fresh leaves cooked in dal or sabzi 2-3 times per week, or 2 drumstick pods in sambar.",
    guidance: {
      do: "Add moringa leaves during the final 5 minutes of cooking dal to preserve delicate heat-sensitive Vitamin C.",
      dont: "Never take unregulated root powders or extreme cleansing pills sold online as miracle cures.",
      askDoctorIf:
        "Ask your doctor if you take blood pressure medicine, since moringa can also naturally lower blood pressure numbers.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "सहजन के पत्ते (मोरिंगा)",
      whatItContains:
        "विटामिन C, बीटा-कैरोटीन, क्वेरसेटिन, क्लोरोजेनिक एसिड, पादप प्रोटीन, पोटैशियम और मैग्नीशियम।",
      provenBenefit:
        "धमनियों को लचीला रखता है, रक्तचाप को सामान्य करने में मदद करता है और सूजन घटाता है।",
      mythClaim:
        "मोरिंगा 300 बीमारियों को जड़ से मिटा देता है और BP की दवा की जरूरत खत्म कर देता है।",
      mythReality:
        "यह एक पौष्टिक साग है, लेकिन डॉक्टर द्वारा दी गई ब्लड प्रेशर या शुगर की दवा का विकल्प नहीं है।",
      whoShouldLimit:
        "गर्भवती महिलाएं (जड़ और छाल का सेवन पूरी तरह वर्जित है; पत्ते केवल सामान्य भोजन में खाएं)।",
      bestPairing: "मूंग दाल तड़का या सांभर में सहजन के पत्ते और फली; घी और काली मिर्च के साथ।",
      do: "पत्तों को दाल में अंत के 5 मिनट में पकाएं ताकि विटामिन C नष्ट न हो।",
      dont: "बाजार में मिलने वाले अनियंत्रित सहजन के जड़ या छाल के कैप्सूल बिना डॉक्टरी सलाह न लें।",
      askDoctorIf:
        "यदि आप थायराइड या BP की दवा ले रहे हैं, तो नियमित सेवन से पहले डॉक्टर को सूचित करें।",
    },
  },
  {
    id: "food-jaggery",
    foodName: "Jaggery (Desi Gur)",
    hindiName: "देसी गुड़",
    level: 3,
    category: "sweetener",
    categoryLabel: "Traditional Unrefined Sugar",
    situationTag: "If you have diabetes or insulin resistance...",
    system: "metabolism",
    systemLabel: "Natural Sweetener & Sugar Level Check",
    whatItContains:
      "Made from natural boiled sugarcane juice. It keeps small amounts of iron and minerals, but is still 80% natural sugar.",
    provenBenefit:
      "Unlike factory white sugar, it has no bleach or harsh chemicals, and a small bite after lunch helps spark natural digestion.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Indian Council of Medical Research (ICMR) Dietary Guidelines & Food Chemistry (PMID: 20627641)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/20627641/",
    mythCheck: {
      claim:
        "Jaggery does not raise blood sugar and can be eaten without limit by diabetic individuals.",
      reality:
        "Jaggery is mostly pure natural sugar (~80%). It raises blood sugar levels almost as fast as regular white table sugar.",
    },
    whoShouldLimit: [
      "Anyone with diabetes or high blood sugar",
      "People managing fatty liver or high blood fats (triglycerides)",
    ],
    bestPairing:
      "Pair 1 small cube (5-10g) with roasted chana (Bengal gram) or roasted sesame seeds (til) to buffer gastric absorption through protein and fat.",
    indianServingContext:
      "Limit to 1 small coin or cube (max 5-10g) after lunch during cold winter months for healthy adults.",
    guidance: {
      do: "Choose dark brown, artisanal organic jaggery free of synthetic chemical clarifiers (sodium hydrosulphite) that produce artificial bright yellow tints.",
      dont: "Never treat jaggery as sugar-free or safe for uncontrolled diabetes—it still raises blood sugar quickly.",
      askDoctorIf:
        "Ask your doctor or dietitian how much jaggery fits into your daily meal plan if you have diabetes.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी गुड़",
      whatItContains:
        "प्राकृतिक सुक्रोज (70-85%), साथ में आयरन (2.6 mg/100g), मैग्नीशियम, पोटैशियम और एंटीऑक्सीडेंट्स।",
      provenBenefit:
        "सफेद चीनी की तुलना में इसमें सल्फर और केमिकल नहीं होते और यह प्राकृतिक खनिज प्रदान करता है।",
      mythClaim: "गुड़ खाने से शुगर नहीं बढ़ती और शुगर के मरीज जितना चाहें खा सकते हैं।",
      mythReality:
        "गुड़ का ग्लाइसेमिक इंडेक्स बहुत अधिक (~84) होता है; यह सफेद चीनी की तरह ही तेजी से शुगर बढ़ाता है।",
      whoShouldLimit: "डायबिटीज (शुगर) के मरीज और फैटी लिवर या बढ़े हुए ट्राइग्लिसराइड वाले लोग।",
      bestPairing:
        "भुने हुए चने या तिल के साथ एक छोटा टुकड़ा; प्रोटीन और फाइबर शुगर स्पाइक को धीमा करते हैं।",
      do: "गहरे भूरे रंग का प्राकृतिक गुड़ चुनें; हल्के पीले रासायनिक रंग वाले गुड़ से बचें।",
      dont: "वजन घटाने के दौरान यह सोचकर ज्यादा गुड़ न खाएं कि यह वजन नहीं बढ़ाता।",
      askDoctorIf:
        "डायबिटीज होने पर गुड़ खाने से पहले अपने डॉक्टर या डायटीशियन से मात्रा जरूर पूछें।",
    },
  },
  {
    id: "food-ghee",
    foodName: "Desi Ghee (A2 Bilona Clarified Butter)",
    hindiName: "देसी गाय का घी (बिलौना)",
    level: 3,
    category: "fat_oil",
    categoryLabel: "High-Heat Cooking Lipid",
    situationTag: "If you're cooking over high heat or managing cholesterol...",
    system: "gut",
    systemLabel: "Healthy Gut Lining & Cooking Fat",
    whatItContains:
      "Pure clarified butter fat with milk solids removed, containing gut-nourishing butyrate fat and vitamins A, D, E, and K.",
    provenBenefit:
      "Nourishes the lining of your gut, aids digestion, and can handle high cooking heat without burning or turning into harmful smoke.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Clinical and Diagnostic Research (PMID: 26816892) & American Heart Association (AHA) Fats Consensus",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/26816892/",
    mythCheck: {
      claim: "Ghee instantly clogs heart arteries and should be 100% eliminated from all diets.",
      reality:
        "In moderate amounts (1 to 2 teaspoons a day), ghee provides clean energy without harmful factory trans-fats; having too much can raise bad cholesterol.",
    },
    whoShouldLimit: [
      "People with very high bad cholesterol (LDL over 160) or family history of heart artery disease",
      "Anyone with active gallbladder stones or pancreas trouble",
    ],
    bestPairing:
      "Melt 1 teaspoon over warm whole-grain khichdi, dal tadka, or steamed bajra to facilitate the uptake of fat-soluble vitamins and curcumin.",
    indianServingContext:
      "1 to 2 teaspoons (5-10 ml) daily distributed across cooked lunch and dinner.",
    guidance: {
      do: "Use traditional bilona ghee as a thermally stable cooking fat for home Indian tempering (tadka) instead of repeatedly reheated seed oils.",
      dont: "Avoid drinking large spoonfuls of melted ghee if your heart tests show high cholesterol.",
      askDoctorIf:
        "Ask your heart doctor about your daily fat limit if you have heart disease or stents.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी घी (बिलौना)",
      whatItContains:
        "ब्यूटायरेट (लघु-श्रृंखला वसा), विटामिन A, D, E, K2 और CLA। लैक्टोज और कैसिइन से पूरी तरह मुक्त।",
      provenBenefit:
        "आंतों की परत को मजबूत करता है और उच्च तापमान पर जलकर हानिकारक टॉक्सिन्स नहीं बनाता।",
      mythClaim: "घी खाने से तुरंत हार्ट अटैक आ जाता है और इसे पूरी तरह बंद कर देना चाहिए।",
      mythReality:
        "सीमित मात्रा (1-2 चम्मच रोज) में यह सुरक्षित और गुणकारी है; बहुत अधिक मात्रा (>3 चम्मच) LDL कोलेस्ट्रॉल बढ़ा सकती है।",
      whoShouldLimit:
        "हाई कोलेस्ट्रॉल (LDL > 160 mg/dL), पित्त की पथरी या पैंक्रियाटाइटिस के मरीज।",
      bestPairing:
        "दाल, खिचड़ी या रोटी पर 1 चम्मच घी; यह हल्दी और मसालों के अवशोषण को 10 गुना बढ़ाता है।",
      do: "रिफाइंड तेलों के बजाय घर की दाल और सब्जी में तड़के के लिए देसी घी का उपयोग करें।",
      dont: "वजन कम करने की चाह में बिना सोचे-समझे चम्मच भरकर घी न पिएं।",
      askDoctorIf:
        "यदि आपको दिल की बीमारी या स्टेंट लगा है, तो अपने कार्डियोलॉजिस्ट से दैनिक सीमा तय करवाएं।",
    },
  },
  {
    id: "food-pickles",
    foodName: "Traditional Indian Pickles (Naturally Fermented Achaar)",
    hindiName: "पारंपरिक किण्वित अचार",
    level: 3,
    category: "fermented",
    categoryLabel: "Probiotic Condiment",
    situationTag: "If you're on blood pressure medication or salt restriction...",
    system: "gut",
    systemLabel: "Stomach Juices & Salt Awareness",
    whatItContains:
      "Healthy friendly bacteria from natural sun-fermenting, mustard oil, spices like methi and saunf, and a high amount of salt.",
    provenBenefit:
      "A small taste wakes up your mouth, helps your stomach produce digestive juices, and feeds good gut microbes.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Frontiers in Microbiology (PMID: 30079053) & ICMR Traditional Fermented Foods Survey",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30079053/",
    mythCheck: {
      claim: "Traditional homemade achaar is pure poison that directly destroys heart valves.",
      reality:
        "Sun-fermented pickles carry live friendly gut bacteria and digestive spices; the only real health risk is having too much salt if you eat large scoops.",
    },
    whoShouldLimit: [
      "People with high blood pressure who need to keep daily salt low",
      "People with kidney trouble or water retention (swollen legs)",
    ],
    bestPairing:
      "A small dab alongside plain curd rice, khichdi, or dal-chawal to stimulate sluggish appetite and support digestion.",
    indianServingContext:
      "Strictly 1 level teaspoon (5-10g) as a flavorful condiment, not as a main vegetable dish.",
    guidance: {
      do: "Choose traditional sun-ripened, mustard-oil cured pickles over factory-bottled industrial varieties packed with synthetic acetic acid and chemical preservatives.",
      dont: "Avoid spooning the leftover salty oil from the bottom of the jar; eat only a small piece of the pickled fruit or veggie.",
      askDoctorIf:
        "Ask your doctor about your daily salt limit if you take blood pressure water pills.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "पारंपरिक देसी अचार",
      whatItContains:
        "प्राकृतिक लैक्टिक एसिड बैक्टीरिया (प्रोबायोटिक्स), सरसों के तेल के पॉलीफेनॉल्स, मेथी-सौंफ और नमक।",
      provenBenefit:
        "पाचन रसों और लार को उत्तेजित करता है और आंतों में अच्छे बैक्टीरिया का संतुलन बनाता है।",
      mythClaim: "अचार पूरी तरह जहर है और इससे तुरंत दिल का दौरा पड़ता है।",
      mythReality:
        "धूप में पका देसी अचार एक गुणकारी प्रोबायोटिक है; मुख्य समस्या सिर्फ इसमें मौजूद अधिक नमक की है।",
      whoShouldLimit: "हाई ब्लड प्रेशर (BP), सूजन (एडिमा) और किडनी की बीमारी से पीड़ित मरीज।",
      bestPairing: "दही-चावल, खिचड़ी या सादी दाल-रोटी के साथ आधा चम्मच।",
      do: "सिरके वाले डिब्बाबंद अचार के बजाय पारंपरिक धूप में पके तेल-मसाले के अचार का छोटा टुकड़ा खाएं।",
      dont: "अचार के जार के नीचे जमा हुआ अधिक तेल और नमक का गाढ़ा मसाला न खाएं।",
      askDoctorIf:
        "यदि आप BP की दवा या पेशाब बढ़ाने वाली दवा ले रहे हैं, तो डॉक्टर से नमक की सीमा पूछें।",
    },
  },
  {
    id: "food-coconut-oil",
    foodName: "Virgin Coconut Oil (Cold-Pressed Nariyal Tel)",
    hindiName: "कोल्ड-प्रेस्ड नारियल का तेल",
    level: 3,
    category: "fat_oil",
    categoryLabel: "Medium-Chain Triglyceride Oil",
    situationTag: "If you're managing cardiovascular risk or liver health...",
    system: "metabolism",
    systemLabel: "Clean Energy Fats & Heart Health",
    whatItContains:
      "Quick-burning natural plant fats (MCTs like lauric acid) that give clean energy, with zero cholesterol.",
    provenBenefit:
      "Your liver turns these fats into quick energy instead of storing them as body fat, and lauric acid helps fight bad gut bugs.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Cochrane Database of Systematic Reviews & American Journal of Clinical Nutrition (PMID: 32679803)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/32679803/",
    mythCheck: {
      claim: "Drinking raw coconut oil every morning instantly burns stubborn belly fat.",
      reality:
        "Coconut oil is 90% saturated fat with 120 calories per tablespoon; drinking extra spoonfuls can still raise bad cholesterol and add unwanted weight.",
    },
    whoShouldLimit: [
      "People with high bad cholesterol (LDL) or heart conditions",
      "People with advanced fatty liver disease",
    ],
    bestPairing:
      "Traditional South Indian tadka for sambar, aviyal, or thoran using 1 teaspoon of virgin oil with mustard seeds, curry leaves, and green chilies.",
    indianServingContext:
      "1 to 2 teaspoons (5-10 ml) per person when used as a cooking medium for coastal regional recipes.",
    guidance: {
      do: "Choose unrefined, cold-pressed virgin coconut oil with a fresh natural aroma rather than chemically bleached and deodorized (RBD) copra oils.",
      dont: "Avoid swallowing large gulps of oil on an empty stomach to lose weight; use a teaspoon in cooking instead.",
      askDoctorIf:
        "Ask your doctor if your blood tests show high cholesterol before adding coconut oil daily.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "कोल्ड-प्रेस्ड नारियल तेल",
      whatItContains:
        "मीडियम-चेन ट्राइग्लिसराइड्स (MCTs), लॉरिक एसिड (~48%), कैप्रिक एसिड और प्राकृतिक एंटीऑक्सीडेंट्स।",
      provenBenefit:
        "लॉरिक एसिड आंतों में रोगाणुओं से लड़ता है और यह तेल शरीर को तुरंत ऊर्जा देने में सक्षम है।",
      mythClaim: "सुबह खाली पेट नारियल तेल पीने से पेट की चर्बी अपने आप पिघल जाती है।",
      mythReality:
        "नारियल तेल में 90% संतृप्त वसा (सैचुरेटेड फैट) और प्रति चम्मच 120 कैलोरी होती है; अधिक पीने से कोलेस्ट्रॉल बढ़ सकता है।",
      whoShouldLimit: "हाई कोलेस्ट्रॉल (LDL), हृदय रोग और फैटी लिवर के मरीज।",
      bestPairing: "सांभर, नारियल की चटनी या कढ़ी में राई और करी पत्ते के साथ हल्का तड़का।",
      do: "केमिकल से साफ किए गए तेल के बजाय कच्चा घानी (कोल्ड-प्रेस्ड) शुद्ध नारियल तेल इस्तेमाल करें।",
      dont: "वजन घटाने के भ्रम में इसे दवा की तरह चम्मच भरकर खाली पेट न पिएं।",
      askDoctorIf:
        "यदि आपका कोलेस्ट्रॉल बढ़ा हुआ है, तो डॉक्टर से सलाह लेकर ही इसे भोजन में शामिल करें।",
    },
  },
  {
    id: "food-millets-bajra",
    foodName: "Millets - Bajra & Foxtail (Pearl Millet & Kangni)",
    hindiName: "बाजरा और कंगनी (मिलेट्स)",
    level: 1,
    category: "millet",
    categoryLabel: "Low-Glycemic Ancient Grains",
    situationTag: "If you're fasting for a festival or managing blood sugar...",
    system: "metabolism",
    systemLabel: "Steady Energy & Sugar Control",
    whatItContains:
      "Slow-burning whole grains packed with fiber, magnesium, natural iron, and energizing B vitamins.",
    provenBenefit:
      "Digests very slowly to keep your energy steady without sugar crashes, and magnesium helps your body use insulin properly.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Frontiers in Nutrition Systematic Review & Meta-Analysis (PMID: 34395510) & ICMR-NIN Millet Taskforce",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34395510/",
    mythCheck: {
      claim: "Millets are dry and suppress thyroid function in every person who eats them.",
      reality:
        "Raw uncooked pearl millet has compounds that can bother the thyroid, but normal cooking, soaking, and using iodized salt completely makes them safe.",
    },
    whoShouldLimit: [
      "People with untreated thyroid problems (if eating raw or undercooked millet without iodized salt)",
      "People with a very sensitive stomach prone to sudden bloating from high fiber",
    ],
    bestPairing:
      "Bajra Roti served with garlic-curd chutney or green moong dal; Foxtail millet pulao cooked with seasonal vegetables and roasted cumin raita.",
    indianServingContext:
      "1-2 medium bajra rotis (50-60g dry flour) or 1 cup cooked foxtail millet for lunch 2-4 times a week.",
    guidance: {
      do: "Transition to millets gradually: begin by blending 30% millet flour with whole wheat or consuming millet grains 2-3 times weekly to allow your gut microbiome to adapt.",
      dont: "Don't switch to 100% millets overnight; mix them slowly with regular flour so your stomach can adjust comfortably.",
      askDoctorIf:
        "Ask your doctor if you take thyroid medicine before making millets your only daily grain.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "बाजरा और कंगनी (मिलेट्स)",
      whatItContains:
        "धीमा पचने वाला जटिल स्टार्च, फाइबर (11-13%), मैग्नीशियम (114 mg/100g), आयरन और जिंक।",
      provenBenefit:
        "मैग्नीशियम इंसुलिन को ठीक से काम करने में मदद करता है और भोजन के बाद शुगर को स्थिर रखता है।",
      mythClaim: "मिलेट्स खाने से हर व्यक्ति का थायराइड खराब हो जाता है।",
      mythReality:
        "कच्चे बाजरे में कुछ तत्व होते हैं, लेकिन अच्छी तरह पकाने और आयोडीन युक्त नमक के साथ खाने पर यह पूरी तरह सुरक्षित है।",
      whoShouldLimit:
        "गंभीर हाइपोथायरायडिज्म के मरीज (यदि वे बिना पकाए या बिना आयोडीन के बहुत ज्यादा बाजरा खाते हैं) और गंभीर IBS वाले।",
      bestPairing: "मूंग दाल, कढ़ी या लहसुन-दही की चटनी के साथ बाजरे की ताजी रोटी।",
      do: "शुरुआत में गेहूं के आटे में 30% बाजरा मिलाकर खाएं ताकि पेट की आंतों को आदत पड़ सके।",
      dont: "एक ही दिन में अचानक 100% मिलेट्स पर न जाएं, इससे पेट में भारीपन या गैस हो सकती है।",
      askDoctorIf:
        "यदि थायराइड की बीमारी है और दवा चल रही है, तो डॉक्टर से सही मात्रा की जानकारी लें।",
    },
  },
  {
    id: "food-amla",
    foodName: "Amla (Indian Gooseberry / Phyllanthus emblica)",
    hindiName: "आंवला",
    level: 1,
    category: "supergreen",
    categoryLabel: "High-Potency Vitamin C Matrix",
    situationTag: "Monsoon & winter immunity protection...",
    system: "liver",
    systemLabel: "Liver Defense & Iron Absorption",
    whatItContains:
      "One of nature's richest sources of natural Vitamin C (20 times more than orange juice), plus protective plant antioxidants.",
    provenBenefit:
      "Shields liver cells from daily stress, strengthens your immune defense, and multiplies how much iron your body absorbs from dal by 4 times.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "European Journal of Clinical Nutrition (PMID: 21490637) & ICMR-NIN Vitamin C Tables",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21490637/",
    mythCheck: {
      claim: "Drinking raw amla juice purges all toxins from your blood within 7 days.",
      reality:
        "Your liver and kidneys do all natural detoxing; amla simply supplies antioxidants that protect liver cells from damage.",
    },
    whoShouldLimit: [
      "People taking blood-thinning medicines (like Warfarin or Aspirin)",
      "Anyone scheduled for surgery in the next two weeks",
    ],
    bestPairing:
      "Grate 1 fresh amla into fresh mint-coriander chutney, or eat fresh amla alongside dal-rice to boost plant iron absorption by 400%.",
    indianServingContext:
      "1 whole fresh amla (or 15-20 ml freshly pressed juice diluted in a glass of water) once daily in the morning.",
    guidance: {
      do: "Consume fresh whole amla fruit or cold-pressed raw juice diluted in warm water rather than sugar-laden commercial amla murabba candies.",
      dont: "Avoid drinking sour amla juice right before bed if you suffer from nighttime acid reflux or heartburn.",
      askDoctorIf:
        "Ask your doctor before taking strong amla juice or powders if you take blood thinners.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "ताजा आंवला",
      whatItContains:
        "प्राकृतिक विटामिन C (600-800 mg/100g, संतरे से 20 गुना अधिक), टैनिन, गैलिक एसिड और एंटीऑक्सीडेंट्स।",
      provenBenefit:
        "आयरन के अवशोषण को 400% तक बढ़ाता है, लिवर की कोशिकाओं की रक्षा करता है और रोग प्रतिरोधक क्षमता मजबूत करता है।",
      mythClaim: "आंवला का जूस 7 दिनों में खून के सारे टॉक्सिन्स बाहर निकाल देता है।",
      mythReality:
        "डिटॉक्स का काम लिवर और किडनी करते हैं; आंवला लिवर को सुरक्षा देने वाले पोषक तत्व देता है।",
      whoShouldLimit:
        "खून पतला करने वाली दवा (वारफारिन, एस्पिरिन) लेने वाले लोग और जिनकी 2 हफ्ते में सर्जरी होने वाली हो।",
      bestPairing:
        "दाल-चावल या पालक की सब्जी के साथ ताजा आंवला चटनी; आयरन भरपूर मात्रा में सोखने के लिए।",
      do: "चाशनी में डूबे मुरब्बे के बजाय ताजा कच्चा आंवला या गुनगुने पानी में इसका रस पिएं।",
      dont: "रात को सोने से ठीक पहले खाली पेट खट्टा आंवला न पिएं यदि एसिडिटी की शिकायत रहती है।",
      askDoctorIf:
        "खून पतला करने की दवा ले रहे हैं तो नियमित आंवला रस लेने से पहले डॉक्टर की सलाह लें।",
    },
  },
  {
    id: "food-curd-chaas",
    foodName: "Dahi & Chaas (Curd & Spiced Buttermilk)",
    hindiName: "ताजा दही और मसाला छाछ",
    level: 1,
    category: "fermented",
    categoryLabel: "Live Probiotic Matrix",
    situationTag: "Monsoon gut safety & summer electrolyte replenishment...",
    system: "gut",
    systemLabel: "Friendly Gut Bacteria & Easy Digestion",
    whatItContains:
      "Millions of live friendly gut bacteria, easy-to-absorb calcium, natural protein, and soothing lactic acid.",
    provenBenefit:
      "Because bacteria break down milk sugars during culturing, curd is gentle on sensitive bellies, soothes the stomach, and fights bad food bugs.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Cell Host & Microbe Landmark Trial (PMID: 34260914) & ICMR Guidelines for Probiotic Foods",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34260914/",
    mythCheck: {
      claim: "Eating curd at dinner directly causes chest phlegm, sinus infections, and colds.",
      reality:
        "Colds and coughs come from viral infections, not curd. Cold curd right out of the fridge might irritate a sensitive throat, but room-temperature curd does not cause phlegm.",
    },
    whoShouldLimit: [
      "Anyone with a severe diagnosed milk protein allergy",
      "People currently taking certain antibiotic pills (take curd at least 2 hours apart)",
    ],
    bestPairing:
      "Spiced Chaas churned with roasted cumin seeds (bhuna jeera), black salt (kala namak), and fresh coriander leaves, consumed with or right after lunch.",
    indianServingContext:
      "1 small katori (100-150g) of fresh dahi or 1 tall glass (250ml) of diluted spiced chaas daily.",
    guidance: {
      do: "Consume freshly set room-temperature dahi or freshly churned chaas; temper with roasted cumin and asafoetida (hing) for superior digestive support.",
      dont: "Don't buy sugary packaged yogurts with 3 to 4 teaspoons of hidden factory sugar per cup.",
      askDoctorIf:
        "Ask your doctor or pharmacist about pill timing if you take antibiotics with dairy.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "ताजा दही और मसाला छाछ",
      whatItContains:
        "जीवित प्रोबायोटिक बैक्टीरिया (लैक्टोबैसिलस), सुपाच्य कैल्शियम, लैक्टिक एसिड, प्रोटीन और पोटैशियम।",
      provenBenefit:
        "आंतों के अच्छे बैक्टीरिया को बढ़ाता है, पेट के संक्रमण से बचाता है और भोजन को आसानी से पचाता है।",
      mythClaim: "रात को दही खाने से सीधे सीने में कफ जमता है और जुकाम हो जाता है।",
      mythReality:
        "जुकाम वायरस से होता है, दही से नहीं। बहुत ठंडा फ्रिज का दही गले में थोड़ी जलन जरूर कर सकता है।",
      whoShouldLimit: "गंभीर दूध एलर्जी (केसीन एलर्जी) वाले और एंटीबायोटिक दवा का कोर्स करने वाले।",
      bestPairing:
        "भुना जीरा, काला नमक और हरा धनिया मिलाकर बनाई गई ताजी छाछ; दोपहर के भोजन के साथ।",
      do: "कमरे के तापमान पर जमाया ताजा मीठा दही खाएं; जीरा और हींग मिलाने से पाचन और अच्छा होता है।",
      dont: "बाजार में मिलने वाले मीठे 'फ्लेवर्ड' डिब्बाबंद योगर्ट न खाएं जिनमें बहुत ज्यादा चीनी होती है।",
      askDoctorIf:
        "एंटीबायोटिक दवा (जैसे सिप्रोफ्लोक्सासिन) ले रहे हैं, तो दही खाने में 2 घंटे का अंतर रखें।",
    },
  },
  {
    id: "food-methi",
    foodName: "Methi Seeds & Greens (Fenugreek)",
    hindiName: "मेथी दाना और हरी मेथी",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Glycemic Stabilizer",
    situationTag: "If you're managing diabetes or post-meal sugar spikes...",
    system: "metabolism",
    systemLabel: "Pancreas Care & Blood Sugar Control",
    whatItContains:
      "Jelly-like soluble fiber, natural plant nutrients that support insulin, and iron-rich green leaves.",
    provenBenefit:
      "Forms a gentle gel in your stomach that slows down sugar absorption, preventing rapid blood sugar spikes after your meals.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Ethnopharmacology Systematic Review (PMID: 27496582) & American Diabetes Association (ADA)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27496582/",
    mythCheck: {
      claim:
        "Chewing methi seeds permanently cures diabetes so you can stop all prescription medicine.",
      reality:
        "Methi is proven to help keep blood sugar steady, but suddenly stopping your prescribed medicine can cause dangerous sugar spikes.",
    },
    whoShouldLimit: [
      "Pregnant women (large medicinal amounts of methi seeds can trigger uterine contractions)",
      "People allergic to chickpeas, peanuts, or related lentils",
    ],
    bestPairing:
      "1 teaspoon (5g) whole methi seeds soaked overnight in warm water, chewed in the morning followed by drinking the soak water; fresh methi leaves cooked into dal or whole wheat thepla.",
    indianServingContext:
      "1 teaspoon soaked seeds daily in the morning, or 1 cup fresh leaves in vegetable dishes 2-3 times weekly.",
    guidance: {
      do: "Soak whole seeds overnight to soften the gel fiber and make them less bitter.",
      dont: "Never take high doses of concentrated methi seed powders during pregnancy.",
      askDoctorIf:
        "Ask your doctor if you take sugar medications, as methi naturally lowers blood sugar and pills may need adjusting.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "मेथी दाना और हरी मेथी",
      whatItContains:
        "गैलेक्टोमैनन घुलनशील फाइबर (45-50%), 4-हाइड्रॉक्सीआइसोल्यूसीन (इंसुलिन बढ़ाने वाला तत्व) और सैपोनिन्स।",
      provenBenefit:
        "भोजन के बाद शुगर के स्तर को तेजी से बढ़ने से रोकता है और शरीर में इंसुलिन की कार्यक्षमता बढ़ाता है।",
      mythClaim:
        "मेथी खाने से शुगर की बीमारी हमेशा के लिए खत्म हो जाती है और दवा बंद की जा सकती है।",
      mythReality:
        "मेथी शुगर को नियंत्रित करने में बहुत मददगार है, लेकिन डॉक्टर की लिखी दवा को अचानक बंद न करें।",
      whoShouldLimit:
        "गर्भवती महिलाएं (गर्भाशय संकुचन के जोखिम के कारण मेथी दाने का अधिक सेवन न करें)।",
      bestPairing:
        "रातभर पानी में भीगे मेथी दाने सुबह खाली पेट; या मेथी का साग मूंग दाल या थेपला में।",
      do: "मेथी दाने को रातभर पानी में भिगोकर रखें ताकि उसका फाइबर मुलायम हो जाए और कड़वाहट कम हो।",
      dont: "गर्भावस्था के दौरान अधिक मात्रा में मेथी दाने का पाउडर या काढ़ा न पिएं।",
      askDoctorIf:
        "यदि आप शुगर की तेज दवा ले रहे हैं, तो डॉक्टर से पूछें ताकि शुगर बहुत ज्यादा कम (हाइपोग्लाइसीमिया) न हो जाए।",
    },
  },
  {
    id: "food-turmeric-pepper",
    foodName: "Turmeric & Black Pepper with Fat (Kacchi Haldi)",
    hindiName: "कच्ची हल्दी + ताजी काली मिर्च + घी",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Curcumin Bioavailability Engine",
    situationTag: "Winter respiratory wellness & joint inflammation...",
    system: "liver",
    systemLabel: "Joint Comfort & Calming Swelling",
    whatItContains:
      "Healing golden curcumin from turmeric, piperine from fresh black pepper, and healthy fat from desi ghee.",
    provenBenefit:
      "Soothes everyday aches, stiffness, and joint swelling; black pepper stops your body from flushing out turmeric so you absorb 20 times more of it.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Planta Medica Landmark Bioavailability Trial (PMID: 9619120) & ICMR Phytomedicine Review",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/9619120/",
    mythCheck: {
      claim: "Drinking raw turmeric powder in plain cold water delivers maximum medicinal potency.",
      reality:
        "Turmeric does not dissolve in plain water. Without black pepper and a healthy fat (like ghee or milk), over 95% passes right through without being absorbed.",
    },
    whoShouldLimit: [
      "People with active gallbladder stones or blocked bile ducts",
      "People on prescription blood thinner medicines",
    ],
    bestPairing:
      "Traditional Haldi Doodh: 1 cup warm milk (or almond milk) simmered with 1/2 tsp freshly grated raw turmeric root, a pinch of freshly crushed black pepper, and 1/4 tsp desi ghee.",
    indianServingContext:
      "1/2 teaspoon raw grated turmeric (or 1/4 tsp pure powder) with a pinch of black pepper daily in cooking or warm milk.",
    guidance: {
      do: "Always combine turmeric with a pinch of freshly cracked black pepper and healthy fat (ghee, mustard oil, or milk) so your body can absorb it.",
      dont: "Avoid taking high-potency factory turmeric extract pills without a doctor's advice.",
      askDoctorIf:
        "Ask your doctor if you take blood thinners or have gallbladder stones before taking turmeric supplements.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "हल्दी, काली मिर्च और घी की जोड़ी",
      whatItContains: "करक्यूमिनॉइड्स (करक्यूमिन), टरमेरोन तेल, और काली मिर्च का पिपेरिन एल्कलॉइड।",
      provenBenefit:
        "शरीर और जोड़ों की अंदरूनी सूजन को कम करता है; काली मिर्च हल्दी के अवशोषण को 2000% बढ़ाती है।",
      mythClaim: "कच्ची हल्दी को सादे ठंडे पानी में घोलकर पीने से सबसे ज्यादा फायदा होता है।",
      mythReality:
        "हल्दी पानी में नहीं घुलती, यह वसा (फैट) में घुलती है; बिना काली मिर्च और घी/दूध के यह शरीर में नहीं सोखी जाती।",
      whoShouldLimit: "पित्ताशय की पथरी (Gallstones) के मरीज और खून पतला करने की दवा लेने वाले।",
      bestPairing:
        "गुनगुने दूध में 1/2 चम्मच हल्दी, चुटकीभर ताजी कुटी काली मिर्च और 1/4 चम्मच देसी घी।",
      do: "सब्जी या दूध में हल्दी डालते समय हमेशा एक चुटकी ताजी काली मिर्च और थोड़ा घी/तेल जरूर मिलाएं।",
      dont: "बिना डॉक्टर की सलाह के हल्दी के भारी सप्लीमेंट कैप्सूल न खाएं।",
      askDoctorIf:
        "यदि पित्त की थैली में पथरी है या कोई ऑपरेशन होने वाला है, तो डॉक्टर से सलाह लें।",
    },
  },
  {
    id: "food-karela",
    foodName: "Bitter Gourd (Karela / Momordica charantia)",
    hindiName: "करेला",
    level: 1,
    category: "vegetable",
    categoryLabel: "Phyto-Insulin Vegetable",
    situationTag: "If you have elevated HbA1c or prediabetes...",
    system: "metabolism",
    systemLabel: "Muscle Sugar Absorption & Blood Sugar Balance",
    whatItContains:
      "Natural plant compounds that act like gentle insulin, cleansing dietary fiber, and Vitamin C.",
    provenBenefit:
      "Helps muscle cells take in sugar from your blood after meals, preventing sharp spikes in blood sugar readings.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Journal of Ethnopharmacology Systematic Review (PMID: 23684941) & ICMR Clinical Evaluation of Momordica",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23684941/",
    mythCheck: {
      claim:
        "Drinking 1 glass of raw bitter gourd juice every morning completely cures diabetes in 30 days.",
      reality:
        "Bitter gourd helps your body handle sugar better, but it does not cure diabetes or permanently repair the pancreas.",
    },
    whoShouldLimit: [
      "Pregnant women (can trigger uterine cramps)",
      "People with rare enzyme deficiencies (G6PD deficiency)",
      "Young children",
    ],
    bestPairing:
      "Thinly sliced karela sautéed with onions, fennel seeds (saunf), and amchur (dry mango powder) in cold-pressed mustard oil, served with dal and whole wheat roti.",
    indianServingContext:
      "1/2 cup to 1 cup cooked vegetable 2-3 times per week as part of a balanced meal.",
    guidance: {
      do: "Cook karela with pleasant digestive spices (saunf, amchur, cumin) rather than boiling in heavy salt water and throwing away the liquid.",
      dont: "Never drink huge glasses of raw bitter gourd juice during pregnancy.",
      askDoctorIf:
        "Ask your doctor if you take diabetes medicines or insulin, so your blood sugar doesn't drop too low.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "करेला",
      whatItContains:
        "पॉलीपेप्टाइड-पी (प्राकृतिक पादप इंसुलिन), शैरेंटिन, मोमोर्डिसिन, फाइबर और विटामिन C।",
      provenBenefit:
        "मांसपेशियों को खून से ग्लूकोज सोखने में मदद करता है और भोजन के बाद शुगर को नियंत्रित रखता है।",
      mythClaim:
        "रोज सुबह 1 गिलास कच्चा करेले का जूस पीने से 30 दिन में डायबिटीज जड़ से खत्म हो जाती है।",
      mythReality:
        "करेला शुगर नियंत्रित करने में बहुत मददगार है, लेकिन यह डायबिटीज को पूरी तरह ठीक (क्योर) नहीं कर सकता।",
      whoShouldLimit:
        "गर्भवती महिलाएं (गर्भाशय में संकुचन पैदा कर सकता है) और G6PD की कमी वाले लोग।",
      bestPairing:
        "सौंफ, प्याज और अमचूर के साथ सरसों के तेल में बनी करेले की सब्जी; दाल और रोटी के साथ।",
      do: "सब्जी बनाते समय सौंफ और अमचूर मिलाएं ताकि कड़वाहट कम हो और पोषक तत्व सुरक्षित रहें।",
      dont: "गर्भावस्था में कच्चे करेले का तेज जूस बिल्कुल न पिएं।",
      askDoctorIf:
        "यदि आप इंसुलिन या शुगर की तेज दवा ले रहे हैं, तो डॉक्टर की सलाह से शुगर की नियमित जांच करते रहें।",
    },
  },

  // 13. Jowar (Sorghum / Jowar Roti)
  {
    id: "food-jowar",
    foodName: "Jowar (Sorghum / White Millet)",
    hindiName: "ज्वार (सोरघम)",
    level: 2,
    category: "millet",
    categoryLabel: "Gluten-Free Grain / मिलेट",
    situationTag: "If you have Diabetes or Want a Light, Gluten-Free Roti...",
    system: "metabolism",
    systemLabel: "Metabolism & Steady Blood Sugar",
    whatItContains:
      "High natural plant fiber, resistant starch, copper, magnesium, and plant antioxidants. 100% naturally free of gluten.",
    provenBenefit:
      "Digests slowly in your belly to release clean, steady glucose. Prevents afternoon energy crashes and promotes easy, regular morning bowel movements.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Indian Council of Medical Research (ICMR-NIN) Millets Nutritional Atlas 2023 & Front Nutr 2021",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34371900/",
    mythCheck: {
      claim: "Jowar rotis are rough, heavy, and cause hard stools.",
      reality:
        "Jowar is actually one of the gentlest grains for sensitive stomachs when kneaded with warm water and eaten fresh.",
    },
    whoShouldLimit: [
      "People with untreated thyroid deficiency unless thoroughly cooked (heat deactivates mild natural goitrogenic compounds)",
    ],
    bestPairing:
      "Warm freshly pressed Jowar bhakri served with cooked green moong dal, roasted garlic chutney, or baingan bharta.",
    indianServingContext: "1 to 2 medium bhakris (rotis) for lunch.",
    guidance: {
      do: "Knead the dough with warm water to make soft, easily digestible rotis.",
      dont: "Don't eat cold, stiff leftover bhakris as resistant starch can feel heavy on a slow stomach.",
      askDoctorIf:
        "Ask your doctor if you have celiac disease to ensure store-bought jowar flour is certified gluten-free from shared wheat mills.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "ज्वार (भाकरी)",
      whatItContains:
        "प्राकृतिक फाइबर, सुपाच्य स्टार्च, मैग्नीशियम, कॉपर और एंटीऑक्सीडेंट। पूरी तरह ग्लूटेन-मुक्त।",
      provenBenefit:
        "पेट में धीरे-धीरे पचकर खून में शुगर को नियंत्रित रखता है और रोज सुबह पेट खुलकर साफ करने में मदद करता है।",
      mythClaim: "ज्वार की रोटी पचने में भारी होती है और कब्ज करती है।",
      mythReality:
        "गर्म पानी से गूंथी ताजी ज्वार की रोटी पेट के लिए गेहूं से भी हल्की और सुपाच्य होती है।",
      whoShouldLimit: "थायरॉइड की गंभीर समस्या वाले लोग इसे अच्छी तरह पकाकर ही खाएं।",
      bestPairing: "हरी मूंग दाल, भुनी लहसुन की चटनी या बैंगन के भर्ते के साथ ताजी ज्वार भाकरी।",
      do: "आटा हमेशा गर्म पानी से गूंथें ताकि रोटियां मुलायम बनें।",
      dont: "बासी और ठंडी हो चुकी कड़ी भाकरी खाने से बचें।",
      askDoctorIf: "यदि आपको सीलिएक रोग है, तो सुनिश्चित करें कि आटा गेहूं की चक्की में न पिसा हो।",
    },
  },

  // 14. Makhana (Fox Nuts / Phool Makhana)
  {
    id: "food-makhana",
    foodName: "Makhana (Fox Nuts / Phool Makhana)",
    hindiName: "फूल मखाना",
    level: 1,
    category: "seed_nut",
    categoryLabel: "Water Lily Seed / मखाना",
    situationTag: "If you're on BP Medication or Crave an Evening Crunch...",
    system: "heart",
    systemLabel: "Heart Health & Arterial Pressure",
    whatItContains:
      "Plant protein, magnesium, potassium, and slow-burning starch. Naturally very low in sodium, cholesterol, and saturated fat.",
    provenBenefit:
      "Calms evening hunger without spiking blood pressure. The high potassium and low sodium balance helps relax heart blood vessels.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation: "ICMR-NIN Food Composition Tables & Front Nutr. (PMID: 34222304)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34222304/",
    mythCheck: {
      claim: "Eating a bowl of makhana burns stubborn belly fat immediately.",
      reality:
        "Makhana is a low-calorie, high-fullness snack that healthily replaces fried chips; it does not burn body fat by itself.",
    },
    whoShouldLimit: [
      "Individuals suffering from severe constipation unless consumed with plenty of water",
      "Rare cases of water lily seed allergy",
    ],
    bestPairing:
      "Dry-roasted in a skillet with 1/2 teaspoon desi ghee, a pinch of turmeric (haldi), and crushed black pepper.",
    indianServingContext: "1 medium bowl (around 25–30g) as an evening tea-time snack.",
    guidance: {
      do: "Roast till crisp in a drop of ghee and store in an airtight container for daily snacks.",
      dont: "Don't buy factory-packaged flavoured makhana loaded with palm oil, excess salt, and artificial cheese powder.",
      askDoctorIf:
        "Ask your doctor if you are on strict fluid or potassium restriction for advanced kidney care.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "फूल मखाना",
      whatItContains:
        "पौष्टिक पादप प्रोटीन, पोटैशियम, मैग्नीशियम और प्राकृतिक स्टार्च। सोडियम और फैट बेहद कम।",
      provenBenefit:
        "शाम की भूख शांत करता है और हाई ब्लड प्रेशर को नियंत्रित रखने में दिल की मदद करता है।",
      mythClaim: "मखाना खाने से पेट की चर्बी तुरंत पिघल जाती है।",
      mythReality:
        "मखाना तले हुए चिप्स की जगह एक बेहतरीन कम कैलोरी वाला नाश्ता है; यह अपने आप चर्बी नहीं पिघलाता।",
      whoShouldLimit: "गंभीर कब्ज से पीड़ित लोग इसे भरपूर पानी पीने के साथ ही खाएं।",
      bestPairing: "आधा चम्मच देसी घी, हल्दी और काली मिर्च के साथ तवे पर भुना हुआ कुरकुरा मखाना।",
      do: "घर पर हल्का भूनकर एयरटाइट डिब्बे में रखें और शाम की चाय के साथ खाएं।",
      dont: "बाजार में मिलने वाले पाम ऑयल और ज्यादा नमक वाले पैकेटबंद मखाने न खरीदें।",
      askDoctorIf:
        "यदि किडनी की बीमारी के कारण पोटैशियम सीमित करने को कहा गया है, तो डॉक्टर से सलाह लें।",
    },
  },

  // 15. Sabja Seeds (Sweet Basil Seeds / Falooda Seeds)
  {
    id: "food-sabja",
    foodName: "Sabja Seeds (Sweet Basil Seeds / Falooda Seeds)",
    hindiName: "सब्जा के बीज (तुलसी बीज)",
    level: 1,
    category: "seed_nut",
    categoryLabel: "Cooling Mucilage Seed / सब्जा",
    situationTag: "If you Suffer from Acidity, Heartburn or Summer Heat...",
    system: "gut",
    systemLabel: "Gut Lining Defense & Acidity Relief",
    whatItContains:
      "Water-loving soluble mucilage fiber (swells 30x in water), plant omega-3 fatty acids, and natural cooling compounds.",
    provenBenefit:
      "Forms a thick soothing gel in the stomach that coats the stomach lining, shielding against fiery acid reflux and keeping body hydration high.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Journal of Food Science and Technology (PMID: 27899732) & Int J Biol Macromol 2020",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27899732/",
    mythCheck: {
      claim: "Sabja seeds and chia seeds are exactly the same thing.",
      reality:
        "Sabja is sweet basil seed that swells in 5 minutes with a jelly-like transparent halo and strong cooling effect; chia takes hours and has different nutritional profiles.",
    },
    whoShouldLimit: [
      "Children and people with difficulty swallowing should NEVER eat dry unsoaked seeds (choking risk)",
      "Pregnant women in high concentrated doses without clinical supervision",
    ],
    bestPairing:
      "1 teaspoon soaked seeds stirred into fresh lemon water (nimbu pani) or tender coconut water.",
    indianServingContext:
      "1 teaspoon soaked seeds in 1 tall glass of water once daily, especially in hot weather.",
    guidance: {
      do: "Always soak seeds in clean water for at least 10–15 minutes until fully translucent with black centers before eating.",
      dont: "Never swallow dry seeds directly with water.",
      askDoctorIf:
        "Ask your doctor if you take daily blood-thinning pills, as basil seeds have mild natural anti-clotting effects.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "सब्जा के बीज",
      whatItContains:
        "घुलनशील जेली जैसा फाइबर (पानी में 30 गुना फूलता है), ओमेगा-3 और पेट को ठंडक देने वाले तत्व।",
      provenBenefit:
        "पेट में एक सुरक्षात्मक जेल बनाकर सीने की जलन और एसिडिटी को शांत करता है और शरीर में पानी की कमी नहीं होने देता।",
      mythClaim: "सब्जा और चिया सीड्स बिल्कुल एक ही चीज हैं।",
      mythReality:
        "सब्जा देसी तुलसी का बीज है जो 5 मिनट में फूलकर ठंडा जेल बनता है; चिया अलग बीज है।",
      whoShouldLimit: "छोटे बच्चों को सूखे बिना भीगे बीज कभी न दें (गले में अटकने का खतरा)।",
      bestPairing: "ताजे नींबू पानी या नारियल पानी में 1 चम्मच भीगे हुए सब्जा के बीज।",
      do: "खाने से पहले कम से कम 10-15 मिनट पानी में पूरी तरह फूलने दें।",
      dont: "सूखे बीज सीधे मुंह में डालकर पानी के साथ कभी न निगलें।",
      askDoctorIf: "यदि आप खून पतला करने की दवा ले रहे हैं, तो डॉक्टर से सलाह लें।",
    },
  },

  // 16. Sattu (Roasted Bengal Gram Flour)
  {
    id: "food-sattu",
    foodName: "Sattu (Roasted Bengal Gram Super-Flour)",
    hindiName: "देसी चना सत्तू",
    level: 2,
    category: "legume",
    categoryLabel: "Roasted Legume Protein / सत्तू",
    situationTag: "If you Need 4 Hours of Clean Stamina & Plant Protein...",
    system: "muscle_bone",
    systemLabel: "Muscle Repair & Sustained Energy",
    whatItContains:
      "Pure plant protein (over 20g per 100g), insoluble fiber, iron, manganese, and cooling minerals. Made from roasted kala chana.",
    provenBenefit:
      "Provides sustained muscular stamina for 4–5 hours without insulin spikes. Traditional cooling summer fuel that keeps energy high and hunger satisfied.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation: "ICMR-NIN Traditional Foods Database & Nutrients Journal (PMID: 35807869)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/35807869/",
    mythCheck: {
      claim: "Sattu creates heavy gas and bloating just like raw besan (gram flour).",
      reality:
        "Because the chana is roasted over hot sand before grinding, gas-forming starches are already broken down, making sattu very easy on the stomach.",
    },
    whoShouldLimit: [
      "People with severe uric acid buildup or active gout arthritis attacks",
      "People with severe advanced kidney disease on strict protein restriction",
    ],
    bestPairing:
      "Stirred into cold water with roasted jeera (cumin) powder, black salt, fresh mint, and a squeeze of lemon (Namkeen Sattu Sharbat).",
    indianServingContext:
      "2 tablespoons (around 30g) stirred in 250ml water for breakfast or pre-workout fuel.",
    guidance: {
      do: "Drink freshly stirred as a savory breakfast drink on busy mornings.",
      dont: "Don't load it with refined white sugar syrups; keep it savory or lightly naturally sweetened.",
      askDoctorIf:
        "Ask your doctor if you have kidney disease requiring strict daily protein limits.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी चना सत्तू",
      whatItContains:
        "उत्कृष्ट शाकाहारी प्रोटीन (20%), फाइबर, आयरन, मैंगनीज और पेट ठंडा रखने वाले खनिज। भुने चने से बना।",
      provenBenefit:
        "4-5 घंटे तक लगातार शारीरिक ताकत देता है, मांसपेशियों को मजबूत करता है और गर्मियों में लू से बचाता है।",
      mythClaim: "सत्तू खाने से कच्चे बेसन की तरह पेट में बहुत गैस बनती है।",
      mythReality:
        "चने को भूनकर पीसने से गैस बनाने वाले तत्व पहले ही नष्ट हो जाते हैं, इसलिए सत्तू बहुत जल्दी पचता है।",
      whoShouldLimit: "हाई यूरिक एसिड या गाउट (गठिया) के रोगी सीमित मात्रा में ही लें।",
      bestPairing:
        "भुने जीरे, काले नमक, पुदीने और नींबू के साथ ठंडे पानी में घुला नमकीन सत्तू शरबत।",
      do: "सुबह नाश्ते में या काम पर निकलने से पहले तुरंत घोलकर पिएं।",
      dont: "इसमें सफेद चीनी का गाढ़ा घोल मिलाकर अनहेल्दी न बनाएं।",
      askDoctorIf:
        "यदि आपको किडनी की बीमारी के कारण प्रोटीन कम खाने को कहा गया है, तो डॉक्टर से पूछें।",
    },
  },

  // 17. Alsi (Flaxseeds / Tisi)
  {
    id: "food-flaxseed",
    foodName: "Alsi (Flaxseeds / Tisi)",
    hindiName: "अलसी के बीज (तीसी)",
    level: 1,
    category: "seed_nut",
    categoryLabel: "Plant Omega-3 Seed / अलसी",
    situationTag: "If you Want to Lower Cholesterol and Protect Your Heart...",
    system: "heart",
    systemLabel: "Heart Protection & Arterial Health",
    whatItContains:
      "Alpha-linolenic acid (essential plant omega-3 oil), soluble prebiotic fiber, and lignans (cellular protectors).",
    provenBenefit:
      "Helps lower total and bad LDL cholesterol, keeps blood vessels flexible, and provides gentle fiber bulk that keeps digestion moving smoothly.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Cochrane Database of Systematic Reviews (PMID: 30488422) & J Am Coll Cardiol 2021",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30488422/",
    mythCheck: {
      claim: "Swallowing whole raw flaxseeds gives you all their heart oils.",
      reality:
        "The stomach cannot break the tough outer shell of whole seeds; they pass out undigested unless lightly roasted and freshly ground into powder.",
    },
    whoShouldLimit: [
      "Pregnant women in high medicinal doses (lignans have mild estrogen-like activity)",
      "People scheduled for surgery within 2 weeks or on high-dose blood thinners",
    ],
    bestPairing:
      "1 tablespoon freshly roasted and ground powder stirred into warm dal, homemade curd, or rolled oats.",
    indianServingContext:
      "1 tablespoon (around 10g) ground powder daily with plenty of drinking water.",
    guidance: {
      do: "Lightly dry-roast the seeds for 2 minutes, grind into powder, and store in an airtight jar in the fridge.",
      dont: "Don't eat raw unroasted flaxseeds in large spoonfuls as heat deactivates minor natural plant blockers.",
      askDoctorIf:
        "Ask your doctor if you take prescription blood thinners or hormone-sensitive medications.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "अलसी के बीज (तीसी)",
      whatItContains:
        "पौधों से मिलने वाला ओमेगा-3 (ALA), घुलनशील फाइबर और नसों को सुरक्षित रखने वाले लिग्नान।",
      provenBenefit:
        "खराब कोलेस्ट्रॉल (LDL) घटाने में मदद करता है, दिल की नसों को लचीला रखता है और पेट साफ करता है।",
      mythClaim: "साबुत कच्चे अलसी के बीज चबाकर खाने से पूरा तेल मिल जाता है।",
      mythReality:
        "साबुत बीज पेट में नहीं पचते; इन्हें हल्का भूनकर और पीसकर पाउडर बनाकर खाने पर ही तेल शरीर में लगता है।",
      whoShouldLimit: "गर्भवती महिलाएं अधिक मात्रा में न लें; सर्जरी से 2 हफ्ते पहले बंद करें।",
      bestPairing: "1 चम्मच भुना और पिसा हुआ पाउडर दाल, दही या ओट्स में मिलाकर खाएं।",
      do: "हल्का भूनकर पाउडर बनाएं और फ्रिज में एयरटाइट डिब्बे में रखें ताकि तेल खराब न हो।",
      dont: "बिना भुने कच्चे बीज बड़ी मात्रा में न खाएं।",
      askDoctorIf: "यदि आप खून पतला करने की दवा ले रहे हैं, तो डॉक्टर की सलाह लें।",
    },
  },

  // 18. Papaya (Papeeta)
  {
    id: "food-papaya",
    foodName: "Papaya (Ripe Papeeta)",
    hindiName: "पका पपीता",
    level: 1,
    category: "fruit",
    categoryLabel: "Digestive Enzyme Fruit / पपीता",
    situationTag: "If you Suffer from Constipation, Heavy Meals or Slow Digestion...",
    system: "gut",
    systemLabel: "Digestive Enzymes & Bowel Motility",
    whatItContains:
      "Papain (a natural protein-digesting enzyme), Vitamin C, beta-carotene, and gentle water-soluble pectin fiber.",
    provenBenefit:
      "Helps your stomach break down heavy proteins and lentils, softens hard stools, and reduces painful bloating within 30 to 45 minutes of eating.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Neuro Endocrinology Letters Clinical Trial (PMID: 23524622) & ICMR-NIN Food Atlas",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23524622/",
    mythCheck: {
      claim: "Eating sweet ripe papaya is dangerous and causes miscarriage in all pregnant women.",
      reality:
        "Fully ripe papaya (yellow/orange skin) is completely safe and healthy; only unripe, raw green papaya contains concentrated white latex that can trigger uterine cramps.",
    },
    whoShouldLimit: [
      "Women in early pregnancy should strictly avoid raw unripe green papaya",
      "People with documented latex-fruit allergy syndrome",
    ],
    bestPairing:
      "Freshly sliced ripe papaya eaten 30 minutes before or after lunch with a light squeeze of fresh lime juice.",
    indianServingContext: "1 small to medium bowl (around 150g) of freshly peeled ripe fruit.",
    guidance: {
      do: "Eat when the peel is golden-yellow and flesh is pleasantly soft.",
      dont: "Don't consume raw hard green papaya salads if pregnant.",
      askDoctorIf:
        "Ask your doctor if you experience itching or tingling in your mouth after eating tropical fruits.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "पका पपीता",
      whatItContains:
        "पपेन (प्रोटीन पचाने वाला प्राकृतिक एंजाइम), विटामिन C, कैरोटीन और आंतों को साफ करने वाला फाइबर।",
      provenBenefit:
        "भारी भोजन और दालों को तेजी से पचाता है, कब्ज से राहत दिलाता है और पेट का भारीपन दूर करता है।",
      mythClaim: "मीठा पका पपीता खाने से गर्भपात हो जाता है और महिलाओं को इसे कभी नहीं खाना चाहिए।",
      mythReality:
        "पूरी तरह पका पीला पपीता बेहद सुरक्षित और गुणकारी है; केवल कच्चा हरा पपीता ही नुकसानदेह होता है।",
      whoShouldLimit:
        "गर्भावस्था में कच्चा हरा पपीता बिल्कुल न खाएं; लेटेक्स एलर्जी वाले लोग बचें।",
      bestPairing: "दोपहर के भोजन से आधा घंटा पहले या बाद में नींबू के रस के साथ ताजी कटी फांकें।",
      do: "हमेशा पका हुआ मुलायम पपीता खाएं जिसका छिलका पीला या नारंगी हो।",
      dont: "गर्भवती होने पर कच्चे पपीते का सलाद न खाएं।",
      askDoctorIf: "यदि फल खाने के बाद मुंह में खुजली महसूस होती है, तो डॉक्टर को दिखाएं।",
    },
  },

  // 19. Rajgira (Amaranth / Ramdana)
  {
    id: "food-rajgira",
    foodName: "Rajgira (Amaranth / Ramdana Grain)",
    hindiName: "राजगिरा (रामदाना)",
    level: 2,
    category: "millet",
    categoryLabel: "Complete Protein Grain / राजगिरा",
    situationTag: "If you Need Calcium for Bones or Complete Plant Protein...",
    system: "muscle_bone",
    systemLabel: "Bone Density & Muscle Repair",
    whatItContains:
      "Complete plant protein with all 9 essential amino acids (rich in lysine), twice the calcium of milk, squalene, and iron.",
    provenBenefit:
      "Strengthens bone density and helps muscles repair after exertion without triggering gluten allergy or sluggish digestion.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Food Chemistry Systematic Review (PMID: 29329837) & ICMR-NIN Nutritive Value of Indian Foods",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/29329837/",
    mythCheck: {
      claim: "Rajgira is only for religious fasts (vrat) and has no place in daily meals.",
      reality:
        "It is one of the highest-protein ancestral super-grains on earth, excellent for everyday rotis, porridge, and children's growth.",
    },
    whoShouldLimit: [
      "People prone to calcium oxalate kidney stones should drink plenty of water when consuming amaranth",
    ],
    bestPairing:
      "Puffed rajgira mixed with warm milk or curd, or rajgira flour paratha made with a little boiled potato.",
    indianServingContext: "1 medium bowl of puffed porridge or 2 small rotis.",
    guidance: {
      do: "Include weekly in place of wheat to get natural calcium and complete amino acids.",
      dont: "Don't load it with heavy refined white sugar syrups; use a hint of jaggery or dates instead.",
      askDoctorIf:
        "Ask your doctor if you have a personal history of recurrent calcium oxalate kidney stones.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "राजगिरा (रामदाना)",
      whatItContains:
        "संपूर्ण पादप प्रोटीन (सभी 9 जरूरी अमीनो एसिड), दूध से दोगुना कैल्शियम, आयरन और स्क्वालीन।",
      provenBenefit:
        "हड्डियों को मजबूत बनाता है, मांसपेशियों की मरम्मत करता है और बिना किसी ग्लूटेन के हल्का रहता है।",
      mythClaim: "राजगिरा केवल व्रत या उपवास का खाना है, रोज खाने लायक नहीं है।",
      mythReality:
        "यह धरती के सबसे पौष्टिक अनाजों में से एक है; बच्चों और बड़ों दोनों के लिए रोज खाने योग्य है।",
      whoShouldLimit: "ऑक्सालेट पथरी की प्रवृत्ति वाले लोग इसे भरपूर पानी पीने के साथ ही खाएं।",
      bestPairing: "गर्म दूध या दही के साथ भुना फूला हुआ रामदाना, या उबले आलू के साथ राजगिरा रोटी।",
      do: "हड्डियों की मजबूती के लिए हफ्ते में 1-2 बार इसे भोजन में जरूर शामिल करें।",
      dont: "इसे बाजार के ज्यादा मीठे और चाशनी वाले लड्‌डू के रूप में न खाएं।",
      askDoctorIf: "यदि आपको बार-बार गुर्दे में पथरी की समस्या रहती है, तो डॉक्टर से परामर्श करें।",
    },
  },

  // 20. Jamun (Indian Blackberry / Java Plum)
  {
    id: "food-jamun",
    foodName: "Jamun (Indian Blackberry / Java Plum)",
    hindiName: "देसी जामुन",
    level: 1,
    category: "fruit",
    categoryLabel: "Glucose Balancing Fruit / जामुन",
    situationTag: "If you have Diabetes or Want to Flatten Meal Sugar Spikes...",
    system: "metabolism",
    systemLabel: "Blood Sugar Stability & Pancreatic Health",
    whatItContains:
      "Jamboline and antimellin compounds, deep anthocyanin pigments, ellagic acid, and natural gentle tannins.",
    provenBenefit:
      "Slows down how fast starch turns into sugar in your gut, flattening post-lunch blood sugar spikes in people with diabetes.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Complementary Therapies in Medicine (PMID: 30935532) & Indian J Clin Biochem 2017",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30935532/",
    mythCheck: {
      claim: "Drinking powdered jamun seeds permanently cures Type 1 or Type 2 diabetes.",
      reality:
        "Jamun helps blunt meal sugar spikes; it does not replace prescribed insulin or doctor-prescribed diabetes pills.",
    },
    whoShouldLimit: [
      "Never eat on an empty stomach (can cause throat acidity or nausea)",
      "Do not drink milk immediately after eating jamun (can upset digestion)",
    ],
    bestPairing:
      "Fresh ripe fruit eaten with a sprinkle of black salt about 20 minutes before a starchy lunch.",
    indianServingContext: "8 to 10 fresh ripe jamun fruits during season (June–August).",
    guidance: {
      do: "Enjoy fresh whole seasonal fruits during monsoons.",
      dont: "Don't consume on an empty stomach or swallow hard bitter inner seeds in huge amounts.",
      askDoctorIf:
        "Ask your doctor to help track your blood sugar levels as jamun can lower blood sugar when taken with medications.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी जामुन",
      whatItContains:
        "जम्बोलिन, गहरा बैंगनी एंथोसायनिन, एलाजिक एसिड और आंतों में शुगर रोकने वाले प्राकृतिक टैनिन।",
      provenBenefit:
        "भोजन के स्टार्च को तेजी से शुगर में बदलने से रोकता है, जिससे खाने के बाद शुगर अचानक नहीं बढ़ती।",
      mythClaim: "जामुन की गुठली का पाउडर खाने से डायबिटीज हमेशा के लिए जड़ से खत्म हो जाती है।",
      mythReality:
        "जामुन शुगर नियंत्रित करने में बहुत मददगार है, लेकिन यह डॉक्टर की दवाओं की जगह नहीं ले सकता।",
      whoShouldLimit:
        "खाली पेट कभी न खाएं (खट्टी डकारें आ सकती हैं); जामुन खाने के तुरंत बाद दूध न पिएं।",
      bestPairing: "दोपहर के खाने से 20 मिनट पहले काले नमक के साथ 8-10 ताजे जामुन।",
      do: "मानसून के मौसम में ताजा फल चबाकर खाएं।",
      dont: "खाली पेट बहुत सारे जामुन खाने से बचें।",
      askDoctorIf:
        "यदि आप शुगर की दवा ले रहे हैं, तो शुगर लो होने से बचने के लिए नियमित जांच करें।",
    },
  },

  // 21. Moong Sprouts (Ankurit Moong)
  {
    id: "food-moong-sprouts",
    foodName: "Moong Sprouts (Living Ankurit Moong)",
    hindiName: "अंकुरित हरी मूंग",
    level: 1,
    category: "legume",
    categoryLabel: "Living Enzyme Sprout / अंकुरित",
    situationTag: "If you Need Light, Gas-Free Plant Protein & Daytime Energy...",
    system: "gut",
    systemLabel: "Cellular Energy & Gentle Digestion",
    whatItContains:
      "Active live enzymes, Vitamin C (quadruples during sprouting), easily absorbable iron, and gentle prebiotic fiber.",
    provenBenefit:
      "Gives your body light, clean plant protein that is 3 times easier for the stomach to absorb than unsprouted beans, without gas or bloating.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Food Science & Nutrition Systematic Review (PMID: 31367310) & ICMR-NIN Indian Food Database",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/31367310/",
    mythCheck: {
      claim: "Raw unheated sprouts are always healthier than lightly steamed sprouts.",
      reality:
        "Steaming sprouts for 3 minutes kills surface bacteria, softens tough fiber, and makes iron much easier for your gut to absorb.",
    },
    whoShouldLimit: [
      "People recovering from stomach infections, elderly individuals, or pregnant women should strictly avoid raw unsteamed sprouts (always steam them lightly)",
    ],
    bestPairing:
      "Lightly steamed sprouts tossed with fresh lemon juice, grated ginger, pinch of black pepper, and pomegranate arils.",
    indianServingContext: "1 medium cup (around 100g) as a breakfast bowl or pre-lunch salad.",
    guidance: {
      do: "Lightly steam for 3 minutes before eating for effortless digestion and safety.",
      dont: "Never eat sprouts that smell sour, look slimy, or were kept warm and wet for over 48 hours.",
      askDoctorIf:
        "Ask your doctor if you have a compromised immune system before consuming uncooked raw produce.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "अंकुरित हरी मूंग",
      whatItContains:
        "सक्रिय जीवित एंजाइम, चौगुना विटामिन C, आसानी से पचने वाला आयरन और हल्का सुपाच्य प्रोटीन।",
      provenBenefit:
        "शरीर को बिना गैस या भारीपन के हल्का प्रोटीन देता है जो साधारण दालों की तुलना में 3 गुना तेजी से पचता है।",
      mythClaim: "कच्चे अंकुरित दाने हमेशा भाप में पकाए गए दानों से ज्यादा फायदेमंद होते हैं।",
      mythReality:
        "3 मिनट भाप लगाने से बैक्टीरिया खत्म होते हैं और शरीर आयरन व खनिजों को ज्यादा आसानी से सोख पाता है।",
      whoShouldLimit:
        "गर्भवती महिलाएं और पेट की बीमारी से उबर रहे लोग कच्चे नहीं, सिर्फ हल्के उबले स्प्राउट्स खाएं।",
      bestPairing:
        "हल्के भाप लगे स्प्राउट्स में नींबू, कद्दूकस किया अदरक, काली मिर्च और अनार के दाने।",
      do: "पाचन आसान बनाने के लिए 3 मिनट भाप में पकाकर ही खाएं।",
      dont: "खट्टी महक वाले या चिपचिपे हो चुके बासी स्प्राउट्स कभी न खाएं।",
      askDoctorIf: "कमजोर रोग प्रतिरोधक क्षमता वाले लोग कच्चा खाने से पहले डॉक्टर से पूछें।",
    },
  },

  // 22. Guava (Amrood / Jamrukh)
  {
    id: "food-guava",
    foodName: "Guava (Fresh Amrood / Jamrukh)",
    hindiName: "अमरूद (जामफल)",
    level: 1,
    category: "fruit",
    categoryLabel: "Immunity & Fiber Fruit / अमरूद",
    situationTag: "If you Suffer from Constipation or Need Real Vitamin C...",
    system: "gut",
    systemLabel: "Colon Motility & Immune Fortress",
    whatItContains:
      "4 times more Vitamin C than fresh oranges (over 200mg per fruit), natural roughage fiber (pectin), potassium, and lycopene.",
    provenBenefit:
      "Wakes up sluggish intestinal muscles to clear stubborn constipation, protects heart arteries, and builds strong daily immunity against seasonal infections.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Human Hypertension Clinical Study (PMID: 8301535) & ICMR-NIN Food Profiles",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/8301535/",
    mythCheck: {
      claim: "Swallowing guava seeds causes appendicitis.",
      reality:
        "Normal smooth guava seeds pass cleanly through healthy intestines and provide gentle internal cleaning for the colon.",
    },
    whoShouldLimit: [
      "People with active intestinal inflammation (diverticulitis) or delicate dental crowns should chew seeds carefully or strain them",
    ],
    bestPairing:
      "Crisp, freshly washed ripe guava sliced with a sprinkle of rock salt (sendha namak) and black pepper.",
    indianServingContext: "1 whole medium guava eaten mid-morning or 1 hour before lunch.",
    guidance: {
      do: "Eat the fruit with its skin on, as the peel holds most of the Vitamin C.",
      dont: "Don't eat overripe mushy fruits with brown blemishes or exposed insect holes.",
      askDoctorIf:
        "Ask your doctor if you have severe intestinal strictures or bowel obstructions.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "अमरूद (जामफल)",
      whatItContains:
        "संतरे से 4 गुना ज्यादा विटामिन C (200mg+), प्राकृतिक आंत साफ करने वाला फाइबर (पेक्टिन) और पोटैशियम।",
      provenBenefit:
        "आंतों की सुस्ती दूर कर पुरानी कब्ज से राहत दिलाता है, ब्लड प्रेशर सामान्य रखता है और मौसमी जुकाम से बचाता है।",
      mythClaim: "अमरूद के बीज निगलने से अपेंडिक्स की बीमारी हो जाती है।",
      mythReality:
        "अमरूद के बीज स्वस्थ आंतों से आसानी से बाहर निकल जाते हैं और पेट की सफाई में मदद करते हैं।",
      whoShouldLimit:
        "दांतों में कैप लगे लोग या आंत में गंभीर सूजन वाले लोग बीज चबाने में सावधानी बरतें।",
      bestPairing: "सेंधा नमक और ताजी पिसी काली मिर्च के साथ कटी हुई अमरूद की फांकें।",
      do: "हमेशा छिलके सहित खाएं, क्योंकि ज्यादातर विटामिन C छिलके के ठीक नीचे होता है।",
      dont: "ज्यादा पके और सड़े-गले अमरूद न खाएं।",
      askDoctorIf: "यदि आंतों में रुकावट की बीमारी है, तो डॉक्टर से सलाह लें।",
    },
  },

  // 23. Beetroot (Chukandar)
  {
    id: "food-beetroot",
    foodName: "Beetroot (Chukandar)",
    hindiName: "चुकंदर",
    level: 1,
    category: "vegetable",
    categoryLabel: "Nitric Oxide Endurance Root / चुकंदर",
    situationTag: "If you Want Lower Blood Pressure & Better Workout Stamina...",
    system: "heart",
    systemLabel: "Nitric Oxide & Arterial Blood Flow",
    whatItContains:
      "Dietary nitrates, betalain antioxidants (liver shields), potassium, folate, and gentle plant fiber.",
    provenBenefit:
      "Relaxes and widens your blood pipes, making it easier for blood to circulate, lowering resting blood pressure, and boosting physical workout stamina.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Hypertension Clinical Trials (PMID: 25421976) & Sports Med Systematic Review 2017",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25421976/",
    mythCheck: {
      claim: "Beetroot turns your urine pink because your kidneys are bleeding.",
      reality:
        "'Beeturia' is a completely harmless passage of natural red betacyanin pigment in urine that happens safely in about 14% of healthy people.",
    },
    whoShouldLimit: [
      "People with a personal history of calcium oxalate kidney stones should consume in moderation due to high natural oxalates",
    ],
    bestPairing:
      "Steamed or grated beetroot blended into fresh homemade curd (Beetroot Raita) with roasted cumin and fresh mint.",
    indianServingContext: "1 small beetroot (steamed or in raita) 2 to 3 times per week.",
    guidance: {
      do: "Lightly steam or roast rather than boiling in heavy water to preserve blood-pressure-lowering nitrates.",
      dont: "Don't panic if your urine or stool turns slightly reddish after eating beetroot.",
      askDoctorIf: "Ask your doctor if you take prescription nitrate medicines for heart angina.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "चुकंदर",
      whatItContains:
        "प्राकृतिक नाइट्रेट, लिवर रक्षक बीटालिन एंटीऑक्सीडेंट, पोटैशियम, फोलेट और फाइबर।",
      provenBenefit:
        "खून की नलियों को चौड़ा और लचीला बनाता है, जिससे ब्लड प्रेशर घटता है और शरीर में फुर्ती आती है।",
      mythClaim: "चुकंदर खाने से पेशाब लाल होना गुर्दे में खून आने का संकेत है।",
      mythReality:
        "यह केवल चुकंदर के प्राकृतिक लाल रंग का सुरक्षित निकास है जो लगभग 14% लोगों में सामान्य रूप से होता है।",
      whoShouldLimit: "गुर्दे की पथरी (ऑक्सालेट स्टोन) वाले लोग सीमित मात्रा में ही सेवन करें।",
      bestPairing: "ताजे दही, भुने जीरे और पुदीने के साथ बना चुकंदर का स्वादिष्ट रायता।",
      do: "पानी में ज्यादा उबालने के बजाय हल्का भाप में पकाएं ताकि इसके गुण नष्ट न हों।",
      dont: "पेशाब का रंग हल्का गुलाबी दिखने पर घबराएं नहीं।",
      askDoctorIf: "यदि आप दिल के लिए नाइट्रेट दवाएं ले रहे हैं, तो डॉक्टर से सलाह लें।",
    },
  },

  // 24. Adrak & Sonth (Fresh & Dry Ginger)
  {
    id: "food-ginger",
    foodName: "Adrak & Sonth (Fresh & Dry Ginger Root)",
    hindiName: "अदरक व सोंठ",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Digestive Spark & Joint Calm / अदरक",
    situationTag: "If you Suffer from Nausea, Gas, or Stiff Morning Joints...",
    system: "gut",
    systemLabel: "Gastric Motility & Joint Inflammation",
    whatItContains:
      "Gingerols, shogaols, and aromatic terpenes that gently stimulate digestive enzymes and calm cellular inflammation.",
    provenBenefit:
      "Speeds up sluggish stomach emptying by nearly 50%, relieves travel nausea and morning sickness, and eases dull, aching joint stiffness.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "World Journal of Gastroenterology (PMID: 21286598) & Arthritis Research Review 2016",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21286598/",
    mythCheck: {
      claim: "Ginger heats up your body dangerously and causes facial boils.",
      reality:
        "In everyday culinary amounts (1/2 to 1 inch daily), ginger aids gastric acid and bile circulation without harming internal body temperature.",
    },
    whoShouldLimit: [
      "People taking high-dose prescription blood thinners (Warfarin/Aspirin) should avoid medicinal extract supplements",
      "People with active bleeding stomach ulcers",
    ],
    bestPairing:
      "Freshly grated ginger steeped in warm water with a squeeze of lemon, or crushed with tulsi into hot tea.",
    indianServingContext: "1/2 to 1 inch of fresh ginger root grated into meals daily.",
    guidance: {
      do: "Add freshly grated ginger near the end of cooking to protect its delicate aromatic oils.",
      dont: "Don't consume heavy concentrated ginger extract pills without medical guidance if on heart pills.",
      askDoctorIf: "Ask your doctor if you take daily antiplatelet or blood-thinning pills.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "अदरक व सोंठ",
      whatItContains:
        "जिंजरॉल, शोगिओल और पाचक एंजाइमों को सक्रिय करने वाले प्राकृतिक सूजनरोधी तेल।",
      provenBenefit:
        "पेट खाली करने की रफ्तार 50% तेज करता है, उल्टी-मतली रोकता है और जोड़ों के दर्द व अकड़न को शांत करता है।",
      mythClaim: "अदरक खाने से शरीर में बहुत तेज गर्मी पैदा होती है और चेहरे पर दाने निकल आते हैं।",
      mythReality: "रोज 1 इंच अदरक भोजन में लेने से पाचन दुरुस्त रहता है और कोई नुकसान नहीं होता।",
      whoShouldLimit:
        "खून पतला करने की दवा (एस्पिरिन) लेने वाले लोग बहुत अधिक अर्क न लें; पेट में अल्सर वाले बचें।",
      bestPairing: "गर्म पानी में कद्दूकस किया अदरक और नींबू, या तुलसी के साथ कड़क देसी चाय।",
      do: "खाना पकने के अंतिम समय में अदरक डालें ताकि इसके गुण सुरक्षित रहें।",
      dont: "दवाओं के साथ बाजार के बिना जांचे अदरक के कैप्सूल न खाएं।",
      askDoctorIf: "यदि आप खून पतला करने वाली दवाएं ले रहे हैं, तो डॉक्टर से सलाह लें।",
    },
  },

  // 25. Kala Chana (Black Bengal Gram)
  {
    id: "food-kala-chana",
    foodName: "Kala Chana (Black Bengal Gram)",
    hindiName: "देसी काला चना",
    level: 2,
    category: "legume",
    categoryLabel: "Iron & Fiber Legume / काला चना",
    situationTag: "If you Need High-Fiber Plant Protein & Lasting Satiety...",
    system: "muscle_bone",
    systemLabel: "Muscle Strength & Steady Satiety",
    whatItContains:
      "Plant protein (15g per cooked cup), insoluble roughage fiber, iron, copper, and slow-digesting resistant starch.",
    provenBenefit:
      "Digests slowly over 4 to 5 hours, providing steady-burn energy, supporting muscle repair, and preventing afternoon hunger dips.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Indian Council of Medical Research (ICMR-NIN) Legumes Database & Br J Nutr (PMID: 32482202)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/32482202/",
    mythCheck: {
      claim: "Kala chana always causes extreme stomach heaviness and gas.",
      reality:
        "Soaking for 10-12 hours and cooking with ginger, ajwain, and hing breaks down gas-forming sugars completely.",
    },
    whoShouldLimit: [
      "People with severe uric acid flare-ups (gout) or advanced kidney disease requiring strict protein limits",
    ],
    bestPairing:
      "Boiled kala chana chaat with chopped cucumber, tomato, green coriander, roasted cumin, and lemon juice.",
    indianServingContext: "1 small bowl (around 100g cooked) for breakfast or an evening snack.",
    guidance: {
      do: "Always soak overnight for at least 8 to 12 hours before boiling.",
      dont: "Don't cook unsoaked hard chana as it can cause heavy stomach cramps.",
      askDoctorIf: "Ask your doctor if you have high uric acid or severe gout arthritis.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी काला चना",
      whatItContains:
        "उत्कृष्ट शाकाहारी प्रोटीन (15g प्रति कप), फाइबर, आयरन, कॉपर और धीरे-धीरे पचने वाला स्टार्च।",
      provenBenefit:
        "4-5 घंटे तक लगातार ऊर्जा देता है, मांसपेशियों को मजबूत करता है और दोपहर में भूख लगने से बचाता है।",
      mythClaim: "काला चना खाने से हमेशा बहुत ज्यादा गैस और पेट भारी होता है।",
      mythReality:
        "10-12 घंटे भिगोकर हींग, अदरक और अजवाइन के साथ पकाने से गैस की समस्या बिल्कुल नहीं होती।",
      whoShouldLimit: "हाई यूरिक एसिड या गंभीर गाउट (गठिया) के रोगी सीमित मात्रा में ही लें।",
      bestPairing:
        "उबले चने में खीरा, टमाटर, हरा धनिया, भुना जीरा और नींबू का रस मिलाकर बनी स्वादिष्ट चाट।",
      do: "पकाने से पहले रात भर कम से कम 8 से 12 घंटे जरूर भिगोएं।",
      dont: "बिना भीगे कड़े चने सीधे न पकाएं, इससे पेट में मरोड़ हो सकती है।",
      askDoctorIf: "यदि आपको यूरिक एसिड या गठिया की समस्या है, तो डॉक्टर से सलाह लें।",
    },
  },

  // 26. Jeera (Cumin Seeds & Jeera Water)
  {
    id: "food-jeera",
    foodName: "Jeera (Cumin Seeds & Warm Jeera Water)",
    hindiName: "जीरा व जीरा पानी",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Digestive Fire Spark / जीरा",
    situationTag: "If you Suffer from Bloating, Sluggish Digestion or Gas...",
    system: "gut",
    systemLabel: "Gastric Motility & Flatulence Relief",
    whatItContains:
      "Thymol, cuminaldehyde, aromatic digestive essential oils, and bioavailable iron.",
    provenBenefit:
      "Stimulates your stomach, pancreas, and liver to release digestive enzymes, speeding up digestion and relieving trapped intestinal gas within 20 minutes.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Complementary Therapies in Clinical Practice (PMID: 25456043) & Food Chem 2018",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25456043/",
    mythCheck: {
      claim: "Drinking boiled jeera water burns 5kg of belly fat every week.",
      reality:
        "Jeera water relieves bloating, gas, and water retention; it does not magically melt body fat without overall healthy eating.",
    },
    whoShouldLimit: [
      "People scheduled for surgery within 2 weeks (mild blood-thinning effect in concentrated extracts)",
    ],
    bestPairing:
      "Freshly roasted and crushed jeera powder sprinkled over homemade curd, chaas, raita, or warm dal.",
    indianServingContext:
      "1 teaspoon roasted powder daily or 1 cup warm jeera water in the morning.",
    guidance: {
      do: "Lightly dry-roast whole cumin seeds on a tawa before grinding to release aromatic digestive oils.",
      dont: "Don't boil jeera seeds endlessly until water turns bitter and dark brown.",
      askDoctorIf: "Ask your doctor if you take prescription blood-thinning medication.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "जीरा व जीरा पानी",
      whatItContains: "थाइमोल, पाचक सुगंधित तेल, क्यूमिनलडिहाइड और आसानी से पचने वाला आयरन।",
      provenBenefit:
        "पाचक रसों और पित्त को सक्रिय करता है, पेट फूलना रोकता है और 20 मिनट के भीतर गैस से राहत दिलाता है।",
      mythClaim: "उबला जीरा पानी पीने से हर हफ्ते 5 किलो पेट की चर्बी पिघल जाती है।",
      mythReality:
        "जीरा पानी पेट की गैस, सूजन और भारीपन दूर करता है; यह चर्बी को जादू से नहीं पिघलाता।",
      whoShouldLimit: "सर्जरी से 2 हफ्ते पहले बहुत अधिक गाढ़ा जीरा अर्क न लें।",
      bestPairing: "दही, छाछ, रायते या दाल में ऊपर से डाला गया भुना पिसा हुआ जीरा पाउडर।",
      do: "तवे पर हल्का भूनकर पीसें ताकि इसके पाचक तेल पूरी तरह सक्रिय हो जाएं।",
      dont: "पानी में घंटों तक उबालकर कड़वा और काला न बनाएं।",
      askDoctorIf: "यदि आप खून पतला करने की दवा ले रहे हैं, तो डॉक्टर से सलाह लें।",
    },
  },

  // 27. Methi Dana (Fenugreek Seeds)
  {
    id: "food-methi-seeds",
    foodName: "Methi Dana (Fenugreek Seeds & Methi Water)",
    hindiName: "मेथी दाना व मेथी पानी",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Glucose Absorption Blocker / मेथी दाना",
    situationTag: "If you Have High Fasting Blood Sugar or Prediabetes...",
    system: "metabolism",
    systemLabel: "Fasting Glucose & Insulin Response",
    whatItContains:
      "Galactomannan soluble fiber (over 45%), 4-hydroxyisoleucine (plant amino acid), and saponins.",
    provenBenefit:
      "Forms a thick gel in the intestines that slows carbohydrate absorption and supports natural insulin action, helping reduce morning fasting blood sugar.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Diabetes and Metabolic Disorders (PMID: 26462366) & ICMR Clinical Studies",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/26462366/",
    mythCheck: {
      claim: "Swallowing whole unsoaked methi seeds cures diabetes in 7 days.",
      reality:
        "Hard dry seeds pass out undigested; you must soak them overnight in water so the beneficial soluble fiber gel can be released.",
    },
    whoShouldLimit: [
      "Pregnant women (can stimulate uterine contractions in large medicinal doses)",
      "People on prescription insulin should track blood sugar to prevent sudden lows",
    ],
    bestPairing:
      "1 teaspoon seeds soaked overnight in warm water, chewed with the water first thing in the morning.",
    indianServingContext: "1 teaspoon soaked seeds daily on an empty stomach.",
    guidance: {
      do: "Soak overnight in water and chew the softened seeds slowly in the morning.",
      dont: "Don't consume heavy powdered doses if pregnant without medical approval.",
      askDoctorIf:
        "Ask your doctor to help track your blood sugar to prevent medication-induced hypoglycemia.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "मेथी दाना व मेथी पानी",
      whatItContains:
        "गैलेक्टोमैनन घुलनशील फाइबर (45%+), 4-हाइड्रॉक्सीआइसोल्यूसीन (पादप अमीनो एसिड) और सैपोनिन।",
      provenBenefit:
        "आंतों में जेल बनाकर खाने से शुगर सोखने की रफ्तार धीमी करता है और सुबह की फास्टिंग शुगर घटाता है।",
      mythClaim: "साबुत बिना भीगे मेथी दाने निगलने से 7 दिन में शुगर हमेशा के लिए ठीक हो जाती है।",
      mythReality:
        "सूखे दाने पचते नहीं; रात भर पानी में भिगोने पर ही इसका फायदेमंद चिपचिपा फाइबर बाहर आता है।",
      whoShouldLimit: "गर्भवती महिलाएं अधिक मात्रा में न लें (गर्भाशय संकुचित हो सकता है)।",
      bestPairing: "रात भर 1 कप पानी में भीगी 1 छोटी चम्मच मेथी, सुबह चबाकर पानी सहित पिएं।",
      do: "नरम हो चुके दानों को अच्छी तरह चबाकर खाएं।",
      dont: "गर्भावस्था में दादी-नानी के कहने पर भी तेज काढ़ा न पिएं।",
      askDoctorIf:
        "इंसुलिन या तेज शुगर की दवा के साथ ले रहे हैं, तो डॉक्टर की सलाह से शुगर नापते रहें।",
    },
  },

  // 28. Saunf (Fennel Seeds)
  {
    id: "food-saunf",
    foodName: "Saunf (Fennel Seeds / Post-Meal Digestive)",
    hindiName: "देसी सौंफ",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Antispasmodic Seed / सौंफ",
    situationTag: "If you Suffer from Post-Meal Acid Reflux, Bloat, or Spasms...",
    system: "gut",
    systemLabel: "Intestinal Muscle Calm & Anti-Reflux",
    whatItContains:
      "Anethole, fenchone, estragole (soothing digestive oils), and natural plant fiber.",
    provenBenefit:
      "Relaxes tight stomach and intestinal muscles, relieving painful cramps, stopping sour acid burps, and freshening breath naturally after meals.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation: "BioMed Research International (PMID: 25162032) & ICMR Traditional Aromatics",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25162032/",
    mythCheck: {
      claim: "Chewing saunf with sweet mishri is just a dessert tradition with no medicinal value.",
      reality:
        "Chewing saunf stimulates saliva containing amylase enzymes, immediately neutralizing stomach acidity and starting digestion in the mouth.",
    },
    whoShouldLimit: [
      "People with estrogen-sensitive conditions should avoid concentrated medicinal extract supplements",
    ],
    bestPairing:
      "1/2 teaspoon lightly toasted saunf chewed slowly after heavy lunches, or steeped in hot water as saunf tea.",
    indianServingContext: "1/2 to 1 teaspoon chewed after main meals.",
    guidance: {
      do: "Chew slowly after lunch or steep 1 teaspoon in boiling water for soothing digestive tea.",
      dont: "Don't eat sugar-coated candy saunf loaded with artificial synthetic colors.",
      askDoctorIf:
        "Ask your doctor if you have severe chronic acid reflux (GERD) before using herbal extracts.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी सौंफ",
      whatItContains: "एनेथोल, फेनचोन (पेट शांत करने वाले प्राकृतिक तेल) और पाचक फाइबर।",
      provenBenefit:
        "पेट और आंतों की मांसपेशियों की ऐंठन शांत करता है, खट्टी डकारें रोकता है और भोजन के बाद मुंह महकाता है।",
      mythClaim: "मिश्री-सौंफ खाना सिर्फ एक रिवाज है, इससे पेट को कोई वास्तविक लाभ नहीं होता।",
      mythReality:
        "सौंफ चबाने से मुंह में पाचक लार बनती है जो तुरंत पेट के एसिड को शांत कर खाना पचाना शुरू करती है।",
      whoShouldLimit: "हार्मोन-संवेदनशील बीमारियों वाले लोग अत्यधिक केंद्रित अर्क न लें।",
      bestPairing: "दोपहर और रात के भारी खाने के बाद 1/2 चम्मच हल्की भुनी सौंफ अच्छी तरह चबाएं।",
      do: "घर की सादी हरी सौंफ खाएं या गर्म पानी में उबालकर सौंफ की चाय पिएं।",
      dont: "बाजार में मिलने वाली कृत्रिम रंगों वाली मीठी रंग-बिरंगी सौंफ खाने से बचें।",
      askDoctorIf: "यदि आपको सीने में लगातार तेज जलन (GERD) की समस्या है, तो डॉक्टर को दिखाएं।",
    },
  },

  // 29. Kanji (Traditional Fermented Black Carrot Probiotic)
  {
    id: "food-kanji",
    foodName: "Kanji (Traditional Fermented Black Carrot Drink)",
    hindiName: "देसी काली गाजर की कांजी",
    level: 1,
    category: "fermented",
    categoryLabel: "Wild Ferment Probiotic / कांजी",
    situationTag: "If you Suffer from Winter Indigestion or Sluggish Gut Flora...",
    system: "gut",
    systemLabel: "Live Probiotics & Gut Barrier Defense",
    whatItContains:
      "Live beneficial lactic acid bacteria, anthocyanin antioxidants (from purple carrots), and mustard seed enzymes.",
    provenBenefit:
      "Delivers billions of living probiotic cultures that settle in your digestive tract, crowd out harmful bacteria, and enhance overall nutrient absorption during winter.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Journal of Food Science and Technology (PMID: 29749987) & ICMR Indigenous Ferments",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/29749987/",
    mythCheck: {
      claim: "Kanji is alcoholic and unsafe for daily consumption.",
      reality:
        "Natural lactic fermentation produces probiotic lactic acid with virtually zero alcohol; it is an ancient non-dairy probiotic health tonic.",
    },
    whoShouldLimit: [
      "People on strict low-sodium diets should moderate intake as kanji contains coarse salt for fermentation preservation",
    ],
    bestPairing:
      "1 small glass (around 100ml) served at room temperature 15 minutes before lunch during winter months.",
    indianServingContext: "1 small cup (100ml) 2 to 3 times per week during seasonal fermentation.",
    guidance: {
      do: "Ferment in sunlight in a glass or ceramic earthen jar with crushed mustard and rock salt.",
      dont: "Never drink kanji if it develops visible white furry mold or smells unpleasantly putrid.",
      askDoctorIf:
        "Ask your doctor if you have severe kidney failure requiring strict sodium limits.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी काली गाजर की कांजी",
      whatItContains:
        "जीवित लैक्टिक एसिड बैक्टीरिया (प्रोबायोटिक्स), बैंगनी गाजर के एंथोसायनिन और राई के पाचक एंजाइम।",
      provenBenefit:
        "अरबों जीवित अच्छे बैक्टीरिया आंतों में पहुंचाकर पाचन तंत्र को मजबूत करता है और सर्दियों में पेट साफ रखता है।",
      mythClaim: "कांजी में शराब (अल्कोहल) होती है और यह बच्चों के लिए सुरक्षित नहीं है।",
      mythReality:
        "पारंपरिक धूप से तैयार कांजी में कोई नशा नहीं होता; यह पूरी तरह प्राकृतिक प्रोबायोटिक पाचक पेय है।",
      whoShouldLimit: "हाई बीपी या किडनी के कारण बहुत कम नमक खाने वाले लोग सीमित मात्रा में लें।",
      bestPairing: "सर्दियों में दोपहर के भोजन से 15 मिनट पहले 1 छोटा गिलास (100ml) कांजी।",
      do: "कांच के बर्तन या मिट्टी के मर्तबान में राई और सेंधा नमक के साथ धूप में तैयार करें।",
      dont: "यदि सतह पर फफूंद दिखे या सड़ी हुई बदबू आए, तो कभी न पिएं।",
      askDoctorIf: "यदि आपको नमक बिल्कुल बंद करने को कहा गया है, तो डॉक्टर से सलाह लें।",
    },
  },

  // 30. Til (Sesame Seeds)
  {
    id: "food-sesame-til",
    foodName: "Til (White & Black Sesame Seeds)",
    hindiName: "देसी तिल (सफेद व काला)",
    level: 2,
    category: "seed_nut",
    categoryLabel: "Plant Calcium Powerhouse / तिल",
    situationTag: "If you Need Natural Calcium for Strong Bones & Joint Lubrication...",
    system: "muscle_bone",
    systemLabel: "Bone Density & Joint Lubrication",
    whatItContains:
      "Plant calcium (nearly 1,000mg per 100g — 3 times more than cow's milk!), sesamin, zinc, magnesium, and healthy polyunsaturated fats.",
    provenBenefit:
      "Strengthens bone density, protects joint cartilage from wearing down, and provides bioavailable zinc for cellular repair.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation: "Osteoporosis International (PMID: 27150532) & ICMR Food Composition Tables",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27150532/",
    mythCheck: {
      claim: "Sesame seeds are too hot for the body and should never be eaten outside winter.",
      reality:
        "While traditionally favored in winter, 1 small teaspoon of lightly toasted sesame seeds provides safe, vital calcium all year round.",
    },
    whoShouldLimit: [
      "People with documented sesame allergy anaphylaxis",
      "Those prone to calcium oxalate kidney stones should drink plenty of water",
    ],
    bestPairing:
      "Lightly toasted sesame seeds mixed with a small piece of jaggery (Til-Gud) or sprinkled over warm sautéed vegetables.",
    indianServingContext: "1 tablespoon (around 10–15g) lightly toasted seeds daily.",
    guidance: {
      do: "Lightly dry-toast the seeds on low flame to make calcium and zinc easier to absorb.",
      dont: "Don't consume heavy sugary commercial sesame bars loaded with liquid glucose.",
      askDoctorIf: "Ask your doctor if you have a history of calcium oxalate kidney stones.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी तिल",
      whatItContains:
        "दूध से 3 गुना ज्यादा कैल्शियम (1000mg प्रति 100g), सेसामिन, जिंक, मैग्नीशियम और अच्छी वसा।",
      provenBenefit:
        "हड्डियों को मजबूत बनाता है, जोड़ों में चिकनाई बनाए रखता है और शरीर को प्राकृतिक जिंक देता है।",
      mythClaim: "तिल की तासीर बहुत गर्म होती है, इसलिए इसे सर्दियों के अलावा कभी नहीं खाना चाहिए।",
      mythReality:
        "सर्दियों में यह उत्तम है ही, लेकिन साल भर 1 छोटी चम्मच भुना तिल खाने से हड्डियों को कैल्शियम मिलता है।",
      whoShouldLimit: "तिल से एलर्जी वाले लोग या गुर्दे में पथरी वाले लोग पानी अधिक पिएं।",
      bestPairing: "थोड़े से गुड़ के साथ भुना हुआ तिल (तिल-गुड़) या सब्जियों पर छिड़क कर खाएं।",
      do: "धीमी आंच पर हल्का भूनकर खाएं ताकि पोषक तत्व आसानी से पच सकें।",
      dont: "बाजार में मिलने वाली ग्लूकोज सिरप और सफेद चीनी से बनी गज्जक अधिक न खाएं।",
      askDoctorIf: "यदि आपको बार-बार पथरी बनने की समस्या है, तो डॉक्टर से परामर्श लें।",
    },
  },

  // 31. Akhrot (Walnuts)
  {
    id: "food-walnut-akhrot",
    foodName: "Akhrot (Walnuts / Brain-Protective Nut)",
    hindiName: "अखरोट",
    level: 1,
    category: "seed_nut",
    categoryLabel: "Artery & Brain Shield / अखरोट",
    situationTag: "If you Need Brain Focus, Memory Support & Artery Elasticity...",
    system: "brain",
    systemLabel: "Brain Synapses & Memory Focus",
    whatItContains:
      "Alpha-linolenic acid (plant omega-3 oil), polyphenol ellagitannins, natural melatonin, and Vitamin E.",
    provenBenefit:
      "Protects brain neurons from oxidative stress, sharpens memory recall, and maintains smooth arterial elasticity in heart blood vessels.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "The American Journal of Clinical Nutrition (PMID: 30971633) & NEJM PREDIMED Study",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30971633/",
    mythCheck: {
      claim: "Eating walnuts causes severe weight gain because they are full of oils.",
      reality:
        "Walnuts contain healthy unsaturated oils that release fullness hormones; eating 3-4 halves daily does not cause weight gain.",
    },
    whoShouldLimit: [
      "People with tree nut allergies; those with active loose stools should limit intake to 2 halves daily",
    ],
    bestPairing: "2 to 3 whole walnut halves soaked in water overnight and eaten with breakfast.",
    indianServingContext: "3 to 4 walnut halves (around 15g) daily in the morning.",
    guidance: {
      do: "Soak walnut kernels in water overnight to remove bitter surface tannins and make them gentle on the belly.",
      dont: "Don't eat stale or rancid walnuts that taste sour or smell like oil paint.",
      askDoctorIf: "Ask your doctor if you take prescription blood-thinning pills.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "अखरोट",
      whatItContains:
        "पादप ओमेगा-3 (ALA), मस्तिष्क रक्षक पॉलीफेनोल, प्राकृतिक मेलाटोनिन और विटामिन E।",
      provenBenefit:
        "दिमाग की नसों को सुरक्षित रखता है, याददाश्त तेज करता है और दिल की धमनियों को लचीला बनाए रखता है।",
      mythClaim: "अखरोट में बहुत ज्यादा तेल होता है जिससे वजन बहुत तेजी से बढ़ जाता है।",
      mythReality:
        "अखरोट का तेल दिल के लिए अच्छा होता है और रोज 3-4 गिरी खाने से वजन नहीं बढ़ता बल्कि भूख नियंत्रित रहती है।",
      whoShouldLimit: "नट्स (मेवे) से एलर्जी वाले लोग इससे बचें; दस्त होने पर कम खाएं।",
      bestPairing: "रात भर पानी में भिगोई हुई 3-4 अखरोट की गिरी सुबह नाश्ते में चबाकर खाएं।",
      do: "पानी में भिगोकर खाएं ताकि ऊपर का कड़वापन हट जाए और पेट के लिए हल्का हो जाए।",
      dont: "पुरानी और कड़वी हो चुकी बासी गिरी न खाएं।",
      askDoctorIf: "यदि आप खून पतला करने की दवा ले रहे हैं, तो डॉक्टर से सलाह लें।",
    },
  },

  // 32. Bael (Wood Apple & Bael Sharbat)
  {
    id: "food-bael",
    foodName: "Bael (Wood Apple Fruit & Summer Sharbat)",
    hindiName: "बेल फल व बेल का शरबत",
    level: 1,
    category: "fruit",
    categoryLabel: "Intestinal Soothing Fruit / बेल",
    situationTag: "If you Suffer from Irritable Bowels, Summer Heat or Loose Stools...",
    system: "gut",
    systemLabel: "Colonic Calm & Loose Stool Relief",
    whatItContains:
      "Marmelosin, pectin mucilage, astringent tannins, Vitamin C, and beta-carotene.",
    provenBenefit:
      "Soothes hyperactive, inflamed intestinal walls, stops chronic loose motions, restores normal stool consistency, and cools the stomach during hot summers.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "BMC Complementary Medicine and Therapies (PMID: 26315579) & ICMR Ethnomedicine",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/26315579/",
    mythCheck: {
      claim: "Drinking bael fruit sharbat causes permanent constipation in everyone.",
      reality:
        "Bael is an intelligent gut balancer; its natural mucilage soothes diarrhea while also gently normalizing sluggish bowels.",
    },
    whoShouldLimit: [
      "Diabetics should avoid commercial bottled bael drinks loaded with refined sugar syrups (prepare fresh without added sugar)",
    ],
    bestPairing:
      "Freshly strained bael pulp mixed with cool water, roasted cumin, and black salt during peak summer.",
    indianServingContext:
      "1 small glass (around 150ml) fresh unsweetened sharbat during hot afternoons.",
    guidance: {
      do: "Scoop out fresh ripe pulp, mash gently in water, and strain seeds without grinding to avoid bitterness.",
      dont: "Never add white sugar; enjoy its natural mild sweetness with a dash of roasted cumin.",
      askDoctorIf:
        "Ask your doctor if you take daily diabetes medication to monitor your fruit sugar intake.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "बेल फल व बेल शरबत",
      whatItContains: "मार्मेंलोसिन, आंतों को आराम देने वाला पेक्टिन, टैनिन, विटामिन C और कैरोटीन।",
      provenBenefit:
        "आंतों की सूजन और मरोड़ शांत करता है, दस्त रोकता है और गर्मियों में पेट को ठंडक देकर लू से बचाता है।",
      mythClaim: "बेल का शरबत पीने से हमेशा के लिए भयानक कब्ज हो जाती है।",
      mythReality:
        "बेल आंतों का संतुलन ठीक करता है; यह दस्त को रोकता है और सुस्त पेट को भी आराम से साफ करता है।",
      whoShouldLimit:
        "डायबिटीज के मरीज बाजार का ज्यादा चीनी घुला शरबत न पिएं; घर पर बिना चीनी बनाएं।",
      bestPairing:
        "गर्मियों की दोपहर में भुने जीरे और काले नमक के साथ ताजा निकाला गया बेल का शरबत।",
      do: "गूदे को पानी में हाथ से मसलकर छानें, बीजों को मिक्सी में न पीसें वरना शरबत कड़वा हो जाएगा।",
      dont: "सफेद चीनी की चाशनी मिलाकर इसे अनहेल्दी न बनाएं।",
      askDoctorIf: "शुगर के रोगी अपनी दवा के साथ फल की मात्रा के लिए डॉक्टर से पूछें।",
    },
  },

  // 33. Pudina (Fresh Mint Leaves)
  {
    id: "food-mint-pudina",
    foodName: "Pudina (Fresh Mint Leaves)",
    hindiName: "ताजा पुदीना",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Intestinal Cramp Reliever / पुदीना",
    situationTag: "If you Experience Cramps, Motion Sickness, or Sour Burps...",
    system: "gut",
    systemLabel: "Intestinal Muscle Relaxation & Nausea Stop",
    whatItContains: "Menthol, menthone, rosmarinic acid, and natural digestive terpenes.",
    provenBenefit:
      "Relaxes the smooth muscular walls of your intestines, relieving painful trapped gas cramps, stopping travel nausea, and clearing sour acidic burps.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation: "BMC Complementary and Alternative Medicine (PMID: 30654773) & Cochrane Review",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30654773/",
    mythCheck: {
      claim: "Eating mint leaves lowers fertility in men.",
      reality:
        "Culinary mint leaves in chutneys or drinks are completely safe and contain zero harmful hormonal effects at dietary levels.",
    },
    whoShouldLimit: [
      "People with severe gastroesophageal reflux (GERD) should avoid concentrated peppermint oil as menthol can relax the stomach valve",
    ],
    bestPairing:
      "Fresh green pudina chutney ground with coriander, ginger, green chili, black salt, and fresh lemon juice.",
    indianServingContext:
      "2 tablespoons fresh chutney with lunch or a handful of fresh leaves steeped in water.",
    guidance: {
      do: "Use fresh raw green leaves in daily chutneys, raitas, and infused drinking water.",
      dont: "Don't consume heavy medicinal peppermint extract capsules without a doctor if you suffer from acid reflux.",
      askDoctorIf:
        "Ask your doctor if you have severe acid reflux that worsens with mint extracts.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "ताजा पुदीना",
      whatItContains: "मेंथॉल, रोजमेरिनिक एसिड और आंतों की ऐंठन मिटाने वाले प्राकृतिक पाचक तत्व।",
      provenBenefit:
        "आंतों की मांसपेशियों को आराम देता है, पेट की मरोड़ और गैस शांत करता है और उल्टी-मतली रोकता है।",
      mythClaim: "पुदीना खाने से पुरुषों की प्रजनन क्षमता कमजोर हो जाती है।",
      mythReality:
        "चटनी या चाय में पुदीना खाने से कोई हार्मोनल नुकसान नहीं होता; यह पूरी तरह सुरक्षित और गुणकारी है।",
      whoShouldLimit:
        "सीने में लगातार तेज तेजाब (GERD) वाले लोग बहुत तेज पुदीना तेल के अर्क से बचें।",
      bestPairing: "हरे धनिए, अदरक, हरी मिर्च, काले नमक और नींबू के साथ पिसी ताजी पुदीने की चटनी।",
      do: "दोपहर के भोजन में ताजी चटनी या छाछ में पुदीने की पत्तियां जरूर शामिल करें।",
      dont: "बाजार की तेज मेंथॉल वाली दवाएं बिना सलाह के एसिडिटी में न लें।",
      askDoctorIf: "यदि आपको गंभीर एसिडिटी की समस्या है, तो डॉक्टर से सलाह लें।",
    },
  },

  // 34. Tulsi (Holy Basil Leaves)
  {
    id: "food-tulsi",
    foodName: "Tulsi (Holy Basil Leaves / Adaptogenic Herb)",
    hindiName: "तुलसी दल (पवित्र तुलसी)",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Stress Shield & Lung Defense / तुलसी",
    situationTag: "If you Face Daily Stress, Air Pollution or Seasonal Coughs...",
    system: "liver",
    systemLabel: "Adaptogenic Stress Shield & Lung Defense",
    whatItContains: "Eugenol, rosmarinic acid, ursolic acid, and adaptogenic plant flavonoids.",
    provenBenefit:
      "Lowers biological stress markers (cortisol), protects bronchial airways from urban smog, and supports liver defense against cellular toxins.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Evidence-Based Complementary and Alternative Medicine (PMID: 28400848) & ICMR Guidelines",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/28400848/",
    mythCheck: {
      claim:
        "Chewing raw tulsi leaves destroys tooth enamel because they contain dangerous mercury.",
      reality:
        "Fresh tulsi contains beneficial aromatic oils and trace iron; brewing in hot water or swallowing leaves gently is safe and healthy.",
    },
    whoShouldLimit: [
      "People taking prescription blood thinners or preparing for major surgery within 10 days",
    ],
    bestPairing:
      "5 to 6 fresh leaves brewed in warm water with crushed ginger, black pepper, and a drop of honey (Tulsi Kadha).",
    indianServingContext: "4 to 5 fresh leaves steeped in morning warm water or light tea.",
    guidance: {
      do: "Steep freshly plucked leaves in hot water for a fragrant, lung-clearing morning drink.",
      dont: "Don't consume concentrated medicinal tulsi tinctures in heavy doses during pregnancy.",
      askDoctorIf: "Ask your doctor if you take daily blood-thinning pills.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "तुलसी दल",
      whatItContains: "यूजेनॉल, रोजमेरिनिक एसिड, अर्सोलिक एसिड और तनाव घटाने वाले प्राकृतिक तत्व।",
      provenBenefit:
        "तनाव हार्मोन (कोर्टिसोल) को नियंत्रित करता है, फेफड़ों को प्रदूषण से बचाता है और मौसमी जुकाम रोकता है।",
      mythClaim:
        "तुलसी के पत्ते चबाने से दांतों का इनेमल तुरंत गल जाता है क्योंकि इसमें पारा होता है।",
      mythReality:
        "तुलसी में कोई हानिकारक धातु नहीं होती; पत्तों को पानी में उबालकर या निगलकर लेना पूरी तरह सुरक्षित है।",
      whoShouldLimit: "खून पतला करने की दवा लेने वाले लोग या सर्जरी से पहले अधिक मात्रा में न लें।",
      bestPairing: "अदरक, काली मिर्च और तुलसी के पत्तों का हल्का गर्म काढ़ा या सुबह की हर्बल चाय।",
      do: "सुबह 4-5 ताजे पत्ते पानी में उबालकर पिएं।",
      dont: "गर्भावस्था में अत्यधिक गाढ़ा अर्क न पिएं।",
      askDoctorIf: "यदि आप खून पतला करने की दवा ले रहे हैं, तो डॉक्टर से परामर्श करें।",
    },
  },

  // 35. Kuttu (Buckwheat Flour)
  {
    id: "food-kuttu",
    foodName: "Kuttu (Buckwheat / Rutin-Rich Grain)",
    hindiName: "कुट्टू का आटा (बकव्हीट)",
    level: 2,
    category: "millet",
    categoryLabel: "Capillary Strength Flour / कुट्टू",
    situationTag: "If you Want Stronger Arteries, Low-GI Roti or Fasting Fuel...",
    system: "heart",
    systemLabel: "Vascular Capillary Strength & Slow Glucose",
    whatItContains:
      "Rutin (a bioflavonoid that reinforces blood capillaries), magnesium, plant protein, and slow-burning soluble fiber. 100% gluten-free.",
    provenBenefit:
      "Strengthens tiny blood capillary walls, keeps post-meal glucose steady, and supports healthy blood pressure without gluten heaviness.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation: "Food Research International (PMID: 29555301) & Nutrients Journal 2020",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/29555301/",
    mythCheck: {
      claim: "Kuttu flour is toxic and inherently causes food poisoning during festivals.",
      reality:
        "Kuttu is a pure healthy pseudo-grain; illness only happens when stale or moldy flour stored in damp godowns is sold during festival rushes.",
    },
    whoShouldLimit: [
      "Rare individuals with specific buckwheat allergy; always buy fresh, clean flour from reputable mills",
    ],
    bestPairing:
      "Freshly kneaded kuttu flour rotis or cheelas mixed with grated bottle gourd (lauki) and served with fresh curd.",
    indianServingContext: "2 small rotis or cheelas for lunch or festival fasting meals.",
    guidance: {
      do: "Always buy fresh, clean flour and store in a dry, airtight jar in a cool place.",
      dont: "Never use old, stale flour that smells sour, looks clumpy, or has been stored for months.",
      askDoctorIf:
        "Ask your doctor if you have celiac disease to confirm the milling facility is dedicated gluten-free.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "कुट्टू का आटा",
      whatItContains:
        "रूटिन (नसों को मजबूत बनाने वाला तत्व), मैग्नीशियम, पादप प्रोटीन और सुपाच्य फाइबर। पूरी तरह ग्लूटेन-मुक्त।",
      provenBenefit:
        "खून की बारीक नलियों को मजबूत बनाता है, भोजन के बाद शुगर स्थिर रखता है और दिल का स्वास्थ्य सुधारता है।",
      mythClaim: "कुट्टू का आटा जहरीला होता है और व्रत में खाने से हमेशा पेट खराब होता है।",
      mythReality:
        "कुट्टू बेहद पौष्टिक है; पेट केवल तब खराब होता है जब बाजार से पुराना, सीलन भरा या मिलावटी आटा खरीदा जाए।",
      whoShouldLimit:
        "दुर्लभ मामलों में बकव्हीट से एलर्जी वाले लोग इससे बचें; हमेशा ताजा आटा ही खरीदें।",
      bestPairing: "कद्दूकस की हुई लौकी के साथ कुट्टू के आटे का चीला या रोटी, ताजे दही के साथ।",
      do: "हमेशा ताजा पिसा आटा खरीदें और एयरटाइट डिब्बे में सूखी जगह पर रखें।",
      dont: "त्योहारों पर खुला या पुराना रखा बासी आटा कभी न खरीदें।",
      askDoctorIf: "यदि आपको सीलिएक रोग है, तो शुद्ध ग्लूटेन-मुक्त चक्की की पुष्टि करें।",
    },
  },

  // 36. Kokum (Amsul / Garcinia Indica)
  {
    id: "food-kokum",
    foodName: "Kokum (Amsul / Garcinia Indica Fruit)",
    hindiName: "देसी कोकम (अमसुल)",
    level: 1,
    category: "fruit",
    categoryLabel: "Coastal Acid Neutralizer / कोकम",
    situationTag: "If you Face Summer Heat, Acid Heartburn or Heat Rashes...",
    system: "gut",
    systemLabel: "Gastric Cooling & Acid Neutralizer",
    whatItContains:
      "Garcinol, hydroxycitric acid (HCA), anthocyanin antioxidants, and natural organic acids.",
    provenBenefit:
      "Cools intense stomach heat, shields the stomach mucosal lining from acid erosion, and prevents dehydration and prickly heat in hot weather.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation: "Current Science Indian Journal (PMID: 26855410) & ICMR Coastal Food Studies",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/26855410/",
    mythCheck: {
      claim: "Drinking kokum juice melts 10kg of body fat in 30 days.",
      reality:
        "Kokum contains mild appetite-soothing HCA, but it works primarily as a fantastic natural digestive coolant and acid shield, not a miracle fat burner.",
    },
    whoShouldLimit: [
      "Severe kidney disease patients with strict potassium restrictions",
      "People prone to acid-induced mouth ulcers",
    ],
    bestPairing:
      "Traditional Solkadhi (kokum extract blended with fresh coconut milk, a crushed garlic clove, green chili, and cumin).",
    indianServingContext:
      "1 small glass (around 100ml) Solkadhi after lunch or 1 cup cool Kokum Sharbat.",
    guidance: {
      do: "Soak dry kokum rinds in warm water to extract the bright pink cooling juice for curries and drinks.",
      dont: "Don't consume commercial kokum syrups that are 70% white sugar and chemical preservatives.",
      askDoctorIf: "Ask your doctor if you are on severe potassium restriction for kidney care.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी कोकम (अमसुल)",
      whatItContains:
        "गार्सिनोल, हाइड्रोक्सीसिट्रिक एसिड (HCA), बैंगनी एंथोसायनिन और पेट ठंडा करने वाले प्राकृतिक अम्ल।",
      provenBenefit:
        "पेट की जलन और एसिडिटी को शांत करता है, आंतों की अंदरूनी परत की रक्षा करता है और लू व घमौरियों से बचाता है।",
      mythClaim: "कोकम का शरबत पीने से 30 दिन में 10 किलो वजन गायब हो जाता है।",
      mythReality:
        "कोकम पाचन सुधारने और पेट की गर्मी शांत करने का उत्तम फल है, यह कोई जादुई वजन घटाने वाली दवा नहीं है।",
      whoShouldLimit: "किडनी की बीमारी में पोटैशियम सीमित करने वाले लोग सीमित मात्रा में ही लें।",
      bestPairing: "नारियल के दूध, लहसुन, हरी मिर्च और जीरे के साथ बनी पारंपरिक पाचक सोलकढ़ी।",
      do: "सूखे कोकम को गर्म पानी में भिगोकर उसका गुलाबी रस दाल या कढ़ी में खटास के लिए इस्तेमाल करें।",
      dont: "बाजार में मिलने वाले सफेद चीनी के गाढ़े शरबत से बचें।",
      askDoctorIf: "यदि किडनी की समस्या के कारण पोटैशियम पर रोक है, तो डॉक्टर से पूछें।",
    },
  },
];

// Re-export FOOD_TIPS for backward compatibility
export const FOOD_TIPS: FoodFactEntry[] = FOOD_FACTS;

export interface FoodSynergyPair {
  id: string;
  foodA: string;
  foodB: string;
  synergyOutcome: string;
  multiplier: string;
  mechanism: string;
  culinaryIdea: string;
}

export const FOOD_SYNERGIES: FoodSynergyPair[] = [
  {
    id: "syn-dal-lemon",
    foodA: "Lentils / Spinach (Cooked Dal / Palak)",
    foodB: "Fresh Lemon Juice (Vitamin C)",
    synergyOutcome: "Non-Heme Iron Absorption Surge",
    multiplier: "+400% Iron Uptake",
    mechanism:
      "Iron in plants (dal and spinach) is hard for the gut to absorb on its own. Vitamin C in fresh lemon juice changes this iron into a form your body can easily soak up, boosting iron absorption by up to 400%.",
    culinaryIdea:
      "Squeeze half a fresh lemon directly over cooked dal tadka or sautéed palak immediately before serving.",
  },
  {
    id: "syn-turmeric-pepper-ghee",
    foodA: "Turmeric Root (Curcumin)",
    foodB: "Black Pepper (Piperine) + Desi Ghee",
    synergyOutcome: "Curcumin Bioavailability Multiplier",
    multiplier: "+2,000% Plasma Peak",
    mechanism:
      "Curcumin in turmeric cannot be absorbed on its own and passes straight through your body. Black pepper stops your liver from breaking it down too quickly, and ghee dissolves it so your body can absorb up to 2,000% more of it.",
    culinaryIdea:
      "Warm milk or dal simmered with 1/2 tsp turmeric, a pinch of freshly crushed black pepper, and 1/2 tsp ghee.",
  },
  {
    id: "syn-dal-chawal",
    foodA: "Lentils / Pulses (Dal)",
    foodB: "Rice or Millets (Chawal / Bajra)",
    synergyOutcome: "Complete Amino Acid Protein Matrix",
    multiplier: "100% Complete Protein",
    mechanism:
      "Rice lacks one key protein building block, while lentils lack another. Eating dal and rice together gives your body all the building blocks it needs, making a 100% complete protein just like milk or eggs.",
    culinaryIdea:
      "Traditional Indian Khichdi or Dal-Chawal with 2:1 ratio of lentils to whole grains.",
  },
  {
    id: "syn-dahi-jeera",
    foodA: "Fresh Curd / Dahi (Lactobacillus)",
    foodB: "Roasted Cumin Seeds (Bhuna Jeera)",
    synergyOutcome: "Carminative Gut Motility Engine",
    multiplier: "Accelerated Gastric Emptying",
    mechanism:
      "Roasted cumin stimulates stomach juices to break down food, while soothing probiotic curd balances your belly. Together, they relieve bloating and help heavy meals digest smoothly.",
    culinaryIdea:
      "Whisk 1 cup dahi into spiced chaas with 1/2 tsp freshly roasted crushed cumin and black salt after lunch.",
  },
  {
    id: "syn-til-gur",
    foodA: "Sesame Seeds / Til (Plant Calcium & Zinc)",
    foodB: "Desi Jaggery / Gur (Organic Acids & Iron)",
    synergyOutcome: "Bone Matrix Calcium Surge",
    multiplier: "+350% Bioavailability",
    mechanism:
      "Jaggery contains natural plant acids and trace minerals that make the dense calcium and zinc in sesame seeds significantly easier for the intestine to absorb. A traditional winter combination that fortifies bone mineral density.",
    culinaryIdea:
      "Enjoy 1 small piece of traditional Til-Gud laddoo or chikki after lunch during colder months.",
  },
  {
    id: "syn-green-tea-lemon",
    foodA: "Green Tea or Pudina Tea (Catechin Polyphenols)",
    foodB: "Fresh Lemon Juice (Vitamin C / Ascorbic Acid)",
    synergyOutcome: "Antioxidant Preservation & Plasma Longevity",
    multiplier: "+500% Catechin Retention",
    mechanism:
      "Over 80% of delicate tea antioxidants break down in the alkaline environment of your small intestine before reaching your blood. Vitamin C in fresh lemon juice creates a mild acid shield that keeps up to 5 times more antioxidants intact.",
    culinaryIdea:
      "Squeeze a fresh lemon wedge directly into freshly steeped green or mint tea right before drinking.",
  },
];

export interface DrugFoodWarning {
  id: string;
  food: string;
  medicationClass: string;
  riskSeverity: "CRITICAL" | "HIGH" | "MODERATE";
  clinicalConsequence: string;
  doctorDirective: string;
}

export const DRUG_FOOD_WARNINGS: DrugFoodWarning[] = [
  {
    id: "warn-grapefruit-statins",
    food: "Grapefruit & Grapefruit Juice",
    medicationClass: "Statins (Atorvastatin, Simvastatin) & Calcium Channel Blockers",
    riskSeverity: "CRITICAL",
    clinicalConsequence:
      "Grapefruit blocks your intestines from breaking down cholesterol and BP medicines. This makes medicine levels in your bloodstream rise dangerously high (3 to 5 times normal), which can harm your muscles and kidneys.",
    doctorDirective:
      "Avoid grapefruit completely if you take statin cholesterol medicines. Ask your doctor for safe alternative fruits.",
  },
  {
    id: "warn-greens-warfarin",
    food: "High-Vitamin K Greens (Spinach, Kale, Methi)",
    medicationClass: "Warfarin / Coumadin (Anticoagulants)",
    riskSeverity: "CRITICAL",
    clinicalConsequence:
      "Vitamin K in dark greens helps blood clot, which directly opposes blood thinner pills like Warfarin. If your intake changes suddenly, your medicine may stop working properly, raising the risk of blood clots.",
    doctorDirective:
      "You don't need to stop greens, but eat the same steady amount each week. Never make sudden big dietary changes without telling your doctor.",
  },
  {
    id: "warn-dairy-antibiotics",
    food: "Dairy Products (Milk, Curd, Paneer)",
    medicationClass: "Fluoroquinolones (Ciprofloxacin) & Tetracyclines",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "The calcium in milk and curd binds directly to certain antibiotics in your stomach like glue. This stops your body from absorbing the medicine, causing the antibiotic to fail.",
    doctorDirective:
      "Eat dairy foods at least 2 hours before or 4 hours after taking these specific antibiotic pills.",
  },
  {
    id: "warn-potassium-ace",
    food: "High Potassium Foods (Salt Substitutes, Bananas, Millets)",
    medicationClass: "ACE Inhibitors (Enalapril, Ramipril) & ARBs (Telmisartan)",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "These blood pressure pills slow down how fast your kidneys remove potassium. Eating 'low sodium' fake salts made with potassium can make potassium build up in your blood to dangerous levels, causing abnormal heartbeats.",
    doctorDirective:
      "Never use potassium-based 'low sodium' salt substitutes without explicit blood tests and advice from your doctor.",
  },
  {
    id: "warn-metformin-b12",
    food: "Long-Term Metformin Use & Dietary Vitamin B12",
    medicationClass: "Metformin (Biguanide for Diabetes / PCOS)",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "Taking Metformin for over 2–3 years reduces calcium-dependent absorption of Vitamin B12 in the lower intestine. This can lead to low B12 levels, causing tingling in the feet, nerve numbness, and unexplained tiredness.",
    doctorDirective:
      "Ask your doctor for an annual Vitamin B12 blood check and discuss B12 supplementation if you take daily Metformin.",
  },
  {
    id: "warn-thyroid-calcium",
    food: "High-Calcium Foods (Milk, Curd, Calcium Pills, Fortified Soya)",
    medicationClass: "Levothyroxine / Eltroxin / Thyronorm (Thyroid Hormone)",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "Calcium binds tightly to levothyroxine thyroid tablets in your stomach like chalk, preventing the hormone from entering your bloodstream and making your medicine appear ineffective.",
    doctorDirective:
      "Take your thyroid pill on an empty stomach with plain water at least 4 hours apart from dairy foods or calcium supplements.",
  },
];
