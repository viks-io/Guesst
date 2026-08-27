import { useCallback, useRef, useState } from "react";
import type { Category, GuessAttempt, Item, ResultSummary, Screen } from "./types";
import { isCorrectGuess } from "./answerMatching";
import { pickRandomItem } from "./randomSelect";
import { MAX_CLUES, pointsForClueCount } from "./scoring";

interface GameState {
  screen: Screen;
  category: Category | null;
  activeItem: Item | null;
  cluesRevealed: number;
  guesses: GuessAttempt[];
  lastGuessWasWrong: boolean;
  result: ResultSummary | null;
}

const initialState: GameState = {
  screen: "home",
  category: null,
  activeItem: null,
  cluesRevealed: 1,
  guesses: [],
  lastGuessWasWrong: false,
  result: null,
};

export function useGame() {
  const [state, setState] = useState<GameState>(initialState);
  const lastItemIdByCategory = useRef<Record<string, string>>({});

  const beginRound = useCallback((category: Category) => {
    const excludeId = lastItemIdByCategory.current[category.id];
    const item = pickRandomItem(category.items, excludeId);
    setState({
      screen: "game",
      category,
      activeItem: item,
      cluesRevealed: 1,
      guesses: [],
      lastGuessWasWrong: false,
      result: null,
    });
  }, []);

  const startGame = useCallback(
    (category: Category) => beginRound(category),
    [beginRound],
  );

  const playAgain = useCallback(() => {
    if (state.category) beginRound(state.category);
  }, [beginRound, state.category]);

  const submitGuess = useCallback((raw: string) => {
    setState((prev) => {
      if (!prev.activeItem || prev.screen !== "game") return prev;

      const correct = isCorrectGuess(raw, prev.activeItem);
      const guesses = [...prev.guesses, { value: raw, correct }];

      if (!correct) {
        return { ...prev, guesses, lastGuessWasWrong: true };
      }

      lastItemIdByCategory.current[prev.activeItem.categoryId] =
        prev.activeItem.id;

      const result: ResultSummary = {
        category: prev.category!,
        item: prev.activeItem,
        outcome: "guessed",
        pointsAwarded: pointsForClueCount(prev.cluesRevealed),
        cluesUsed: prev.cluesRevealed,
      };

      return {
        ...prev,
        guesses,
        lastGuessWasWrong: false,
        screen: "result",
        result,
      };
    });
  }, []);

  const revealNextClue = useCallback(() => {
    setState((prev) => ({
      ...prev,
      cluesRevealed: Math.min(prev.cluesRevealed + 1, MAX_CLUES),
      lastGuessWasWrong: false,
    }));
  }, []);

  const revealAnswer = useCallback(() => {
    setState((prev) => {
      if (!prev.activeItem || prev.cluesRevealed < MAX_CLUES) return prev;

      lastItemIdByCategory.current[prev.activeItem.categoryId] =
        prev.activeItem.id;

      const result: ResultSummary = {
        category: prev.category!,
        item: prev.activeItem,
        outcome: "revealed",
        pointsAwarded: 0,
        cluesUsed: MAX_CLUES,
      };

      return { ...prev, screen: "result", result };
    });
  }, []);

  const goHome = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    ...state,
    actions: { startGame, submitGuess, revealNextClue, revealAnswer, playAgain, goHome },
  };
}
