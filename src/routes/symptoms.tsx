import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useEffect, useRef } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Stethoscope, Loader2, RefreshCcw } from "lucide-react";

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export interface ChatPayload {
  messages: ChatMessage[];
  language?: string;
}

const chatWithAI = createServerFn({ method: "POST" })
  .validator((data: ChatPayload) => data)
  .handler(async ({ data: input }) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API key is missing.");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const languageText = input.language === "hi"
        ? "CRITICAL: Write all text values in Hindi (हिंदी)."
        : "All response text must be in English.";

      const systemPrompt = `You are an elite, highly intelligent Clinical Diagnostician and Health Investigator.
Your tone is professional, direct, analytical, and editorial (like a high-end medical journal). 
Do NOT sound like a generic AI. Do not use generic pleasantries like "I'm sorry to hear that" or "I am an AI."
Provide precise, physiological explanations. 

CRITICAL CROSS-REFERENCING INSTRUCTIONS:
Always be suspicious of modern environmental and dietary factors. When diagnosing, actively cross-reference the user's symptoms with:
1. Grey Market Items: Ask if they are using unregulated peptides, generic minoxidil, SARMs, or unverified online supplement stacks.
2. Food Labels / FMCG Expose: Ask if they consume hidden toxic ingredients (e.g., 'natural flavors', seed oils disguised as healthy, 'mono- and diglycerides' acting as trans fats, artificial food dyes like Red 40 which cause neurological symptoms).

Structure your responses using clear markdown. Use bolding for emphasis. Keep paragraphs short and asymmetrical. If you need more information to diagnose, ask ONE or TWO piercing questions.

${languageText}
`;

      const contents = [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Acknowledged. I am ready to begin the clinical consultation. Please describe your symptoms." }] }
      ];

      for (const msg of input.messages) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        });
      }

      const result = await model.generateContent({
        contents,
        generationConfig: {
          temperature: 0.4,
        }
      });

      return result.response.text();
    } catch (error) {
      console.error("AI Error:", error);
      return "There was an error connecting to the diagnostic server. Please try again.";
    }
  });

export const Route = createFileRoute("/symptoms")({
  head: () => ({
    meta: [
      { title: "Consult AI — The Living Body Atlas" },
      { name: "description", content: "Conversational AI Symptom Analyzer." }
    ]
  }),
  component: SymptomsChatPage,
});

function SymptomsChatPage() {
  const { language, addHistoryEntry } = useBodyStore();
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "model", content: "Please describe what you're experiencing. Include onset duration, severity, and any recent changes to your diet or supplement stack." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addHistoryEntry("/symptoms");
  }, [addHistoryEntry]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: "user", content: inputValue.trim() };
    const newMessages = [...messages, userMsg];
    
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    try {
      const aiResponse = await chatWithAI({
        data: { messages: newMessages, language }
      });
      setMessages([...newMessages, { role: "model", content: aiResponse }]);
    } catch (err) {
      setMessages([...newMessages, { role: "model", content: "Communication interrupted. Please verify connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: "model", content: "Chat history cleared. Please describe what you're experiencing." }]);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col pt-12 pb-8">
      
      {/* Medical Disclaimer Banner */}
      <div className="w-full bg-accent/10 border-b border-accent/20 px-4 py-3 flex items-start sm:items-center justify-center shrink-0">
        <p className="text-xs sm:text-sm font-mono text-accent leading-snug text-center">
          <strong className="uppercase tracking-wider">⚠️ NOT A DIAGNOSIS:</strong> Consult a verified physician for severe or life-threatening symptoms.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col grow h-[calc(100vh-180px)]">
        
        {/* Header */}
        <header className="mb-8 border-b-2 border-charcoal dark:border-bone pb-6 shrink-0 mt-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Section 02 — Consult
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-display text-charcoal dark:text-bone flex items-center gap-4">
                <Stethoscope className="w-8 h-8 text-accent hidden md:block" />
                The Diagnostician.
              </h1>
            </div>
            <button 
              onClick={clearChat}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-charcoal dark:hover:text-bone transition-colors flex items-center gap-2"
            >
              <RefreshCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        </header>

        {/* Chat Thread */}
        <div className="flex-1 overflow-y-auto mb-6 pr-4 space-y-8 no-scrollbar pb-12">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col max-w-[85%] ${msg.role === "user" ? "ml-auto" : "mr-auto"}`}
              >
                {msg.role === "model" && (
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 ml-4">
                    Dr. AI / {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                )}
                <div 
                  className={`p-6 ${
                    msg.role === "user" 
                      ? "bg-charcoal text-bone dark:bg-bone dark:text-charcoal rounded-tl-2xl rounded-tr-sm rounded-b-2xl font-body text-sm" 
                      : "bg-transparent border-l-2 border-accent/50 rounded-r-2xl font-display text-lg text-charcoal dark:text-bone leading-relaxed"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col max-w-[85%] mr-auto"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 ml-4">
                  Dr. AI / Synthesizing
                </div>
                <div className="p-6 bg-transparent border-l-2 border-accent/50 rounded-r-2xl flex items-center gap-3 text-muted-foreground">
                  <Loader2 className="w-5 h-5 animate-spin text-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest">Cross-referencing databases...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="shrink-0 bg-background pt-4 pb-8">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your symptoms..."
              disabled={isTyping}
              className="w-full bg-input border border-border px-6 py-5 pr-16 text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-charcoal text-bone dark:bg-bone dark:text-charcoal disabled:opacity-50 hover:bg-accent dark:hover:bg-accent hover:text-white transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-center font-mono text-[10px] text-muted-foreground mt-3 uppercase tracking-widest">
            AI can make mistakes. Always verify with a real doctor.
          </p>
        </div>
      </div>
    </main>
  );
}
