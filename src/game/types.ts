export interface Clue {
  text: string;
}

/** Exactly five clues, ordered hardest to easiest. */
export type ClueSet = [Clue, Clue, Clue, Clue, Clue];

export interface Item {
  id: string;
  categoryId: string;
  answer: string;
  aliases: string[];
  clues: ClueSet;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: Item[];
}

export type Screen = "home" | "game" | "result";

export interface GuessAttempt {
  value: string;
  correct: boolean;
}

export type Outcome = "guessed" | "revealed";

export interface ResultSummary {
  category: Category;
  item: Item;
  outcome: Outcome;
  pointsAwarded: number;
  cluesUsed: number;
}
