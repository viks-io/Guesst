const POINTS_BY_CLUES_REVEALED = [5, 4, 3, 2, 1] as const;

export const MAX_CLUES = POINTS_BY_CLUES_REVEALED.length;

/** Points available while `cluesRevealed` clues (1-5) are showing. */
export function pointsForClueCount(cluesRevealed: number): number {
  const index = Math.min(Math.max(cluesRevealed, 1), MAX_CLUES) - 1;
  return POINTS_BY_CLUES_REVEALED[index];
}
