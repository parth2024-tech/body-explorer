import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Category, Layer, Language } from "@/data/content";

export interface ReadingHistoryEntry {
  path: string;
  timestamp: number;
}

export interface WaterIntakeLog {
  date: string;
  amount: number; // in ml
}

export interface SymptomLogEntry {
  id: string;
  date: string;
  symptom: string;
  notes: string;
  severity: "mild" | "moderate" | "severe";
}

export interface MoodLogEntry {
  date: string;
  mood: string;
}

interface BodyState {
  // Existing state
  selectedPartId: string | null;
  activeCategory: Category;
  activeLayer: Layer;
  setSelectedPart: (id: string | null) => void;
  setCategory: (c: Category) => void;
  setLayer: (l: Layer) => void;
  closePanel: () => void;

  // New state for 10 features
  bookmarks: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  streak: number;
  lastVisitDate: string | null;
  updateStreak: () => void;

  readingHistory: ReadingHistoryEntry[];
  addHistoryEntry: (path: string) => void;

  language: Language;
  setLanguage: (lang: Language) => void;

  waterIntakeLogs: WaterIntakeLog[];
  addWaterIntake: (amount: number, date?: string) => void;
  getWaterToday: () => number;

  symptomLogs: SymptomLogEntry[];
  addSymptomLog: (entry: Omit<SymptomLogEntry, "id">) => void;
  deleteSymptomLog: (id: string) => void;

  bodyMapNotes: Record<string, string[]>;
  addBodyMapNote: (partId: string, note: string) => void;
  deleteBodyMapNote: (partId: string, index: number) => void;

  bodyMapLayer: "skin" | "muscles" | "organs" | "bones";
  setBodyMapLayer: (layer: "skin" | "muscles" | "organs" | "bones") => void;

  interests: string[];
  toggleInterest: (interest: string) => void;
  setInterests: (interests: string[]) => void;

  moodLogs: MoodLogEntry[];
  addMoodLog: (mood: string, date?: string) => void;
}

export const useBodyStore = create<BodyState>()(
  persist(
    (set, get) => ({
      // Existing state
      selectedPartId: null,
      activeCategory: "weird_wild",
      activeLayer: "facts",
      setSelectedPart: (id) => set({ selectedPartId: id, activeCategory: "weird_wild" }),
      setCategory: (c) => set({ activeCategory: c }),
      setLayer: (l) => set({ activeLayer: l }),
      closePanel: () => set({ selectedPartId: null }),

      // New state initialization
      bookmarks: [],
      addBookmark: (id) => set((state) => ({ bookmarks: [...state.bookmarks, id] })),
      removeBookmark: (id) => set((state) => ({ bookmarks: state.bookmarks.filter((b) => b !== id) })),
      isBookmarked: (id) => get().bookmarks.includes(id),

      streak: 0,
      lastVisitDate: null,
      updateStreak: () => {
        const today = new Date().toISOString().split("T")[0];
        const lastVisit = get().lastVisitDate;

        if (!lastVisit) {
          set({ streak: 1, lastVisitDate: today });
          return;
        }

        if (lastVisit === today) {
          return; // Already visited today
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];

        if (lastVisit === yesterdayStr) {
          set((state) => ({ streak: state.streak + 1, lastVisitDate: today }));
        } else {
          // Missed days don't reset to zero, just show a gap or start fresh
          // Per instruction: "Missed days don't reset to zero, just show a gap"
          // We can keep it or increment with a gap indicator or reset if it's too long
          set((state) => ({ streak: state.streak + 1, lastVisitDate: today }));
        }
      },

      readingHistory: [],
      addHistoryEntry: (path) =>
        set((state) => {
          const entry = { path, timestamp: Date.now() };
          // Keep history limited to last 50 entries
          const filtered = state.readingHistory.filter((h) => h.path !== path);
          return { readingHistory: [entry, ...filtered].slice(0, 50) };
        }),

      language: "en",
      setLanguage: (lang) => set({ language: lang }),

      waterIntakeLogs: [],
      addWaterIntake: (amount, date) => {
        const targetDate = date || new Date().toISOString().split("T")[0];
        set((state) => {
          const existingIdx = state.waterIntakeLogs.findIndex((log) => log.date === targetDate);
          const newLogs = [...state.waterIntakeLogs];
          if (existingIdx !== -1) {
            newLogs[existingIdx] = {
              ...newLogs[existingIdx],
              amount: newLogs[existingIdx].amount + amount,
            };
          } else {
            newLogs.push({ date: targetDate, amount });
          }
          return { waterIntakeLogs: newLogs };
        });
      },
      getWaterToday: () => {
        const today = new Date().toISOString().split("T")[0];
        const log = get().waterIntakeLogs.find((l) => l.date === today);
        return log ? log.amount : 0;
      },

      symptomLogs: [],
      addSymptomLog: (entry) => {
        const newEntry: SymptomLogEntry = {
          ...entry,
          id: Math.random().toString(36).substring(2, 9),
        };
        set((state) => ({ symptomLogs: [newEntry, ...state.symptomLogs] }));
      },
      deleteSymptomLog: (id) =>
        set((state) => ({ symptomLogs: state.symptomLogs.filter((log) => log.id !== id) })),

      bodyMapNotes: {},
      addBodyMapNote: (partId, note) =>
        set((state) => {
          const existing = state.bodyMapNotes[partId] || [];
          return {
            bodyMapNotes: {
              ...state.bodyMapNotes,
              [partId]: [...existing, note],
            },
          };
        }),
      deleteBodyMapNote: (partId, index) =>
        set((state) => {
          const existing = state.bodyMapNotes[partId] || [];
          const updated = [...existing];
          updated.splice(index, 1);
          return {
            bodyMapNotes: {
              ...state.bodyMapNotes,
              [partId]: updated,
            },
          };
        }),

      bodyMapLayer: "organs",
      setBodyMapLayer: (layer) => set({ bodyMapLayer: layer }),

      interests: [],
      toggleInterest: (interest) =>
        set((state) => {
          const exists = state.interests.includes(interest);
          return {
            interests: exists
              ? state.interests.filter((i) => i !== interest)
              : [...state.interests, interest],
          };
        }),
      setInterests: (interests) => set({ interests }),

      moodLogs: [],
      addMoodLog: (mood, date) => {
        const targetDate = date || new Date().toISOString().split("T")[0];
        const entry: MoodLogEntry = { date: targetDate, mood };
        set((state) => {
          const filtered = state.moodLogs.filter((m) => m.date !== targetDate);
          return { moodLogs: [...filtered, entry] };
        });
      },
    }),
    {
      name: "atlas-body-state",
      partialize: (state) => ({
        bookmarks: state.bookmarks,
        streak: state.streak,
        lastVisitDate: state.lastVisitDate,
        readingHistory: state.readingHistory,
        language: state.language,
        waterIntakeLogs: state.waterIntakeLogs,
        symptomLogs: state.symptomLogs,
        bodyMapNotes: state.bodyMapNotes,
        bodyMapLayer: state.bodyMapLayer,
        interests: state.interests,
        moodLogs: state.moodLogs,
      }),
    }
  )
);
