import { useState, useEffect, useCallback } from "react";

/**
 * Pure Fisher-Yates shuffle algorithm.
 * Returns a new shuffled array without mutating the input.
 */
export function shuffleArray<T>(array: readonly T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

/**
 * Samples N random distinct elements from an array.
 */
export function sampleRandom<T>(array: readonly T[], count: number): T[] {
  if (array.length <= count) return shuffleArray(array);
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
}

/**
 * Hydration-safe shuffle hook for React SSR / TanStack Start.
 * - Initial state matches `initialItems` so SSR HTML matches client initial DOM.
 * - Shuffles on client mount in `useEffect` so every visit discovers fresh content.
 * - Exposes `reshuffle()` for on-demand rotation.
 */
export function useShuffledList<T>(initialItems: readonly T[], autoShuffleOnMount: boolean = true) {
  const [items, setItems] = useState<T[]>(() => [...initialItems]);
  const [shuffleKey, setShuffleKey] = useState(0);

  useEffect(() => {
    if (autoShuffleOnMount && initialItems.length > 1) {
      setItems(shuffleArray(initialItems));
      setShuffleKey((k) => k + 1);
    }
  }, [initialItems, autoShuffleOnMount]);

  const reshuffle = useCallback(() => {
    setItems((prev) => shuffleArray(prev));
    setShuffleKey((k) => k + 1);
  }, []);

  return { items, reshuffle, shuffleKey };
}
