import type { Item } from "./types";

const COMBINING_DIACRITICS = /\p{Diacritic}/gu;

/** Lowercases, trims, collapses whitespace, and strips accents so accented and plain spellings match. */
export function normalizeAnswer(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(COMBINING_DIACRITICS, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/** Exact match (post-normalization) against the answer or its configured aliases. No fuzzy matching. */
export function isCorrectGuess(guess: string, item: Item): boolean {
  const normalized = normalizeAnswer(guess);
  if (!normalized) return false;

  const candidates = [item.answer, ...item.aliases].map(normalizeAnswer);
  return candidates.includes(normalized);
}
