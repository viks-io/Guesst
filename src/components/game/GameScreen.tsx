import type { GuessAttempt, Item } from "../../game/types";
import { MAX_CLUES, pointsForClueCount } from "../../game/scoring";
import { ClueList } from "./ClueList";
import { ScoreBadge } from "./ScoreBadge";
import { GuessForm } from "./GuessForm";
import { RevealControls } from "./RevealControls";

interface GameScreenProps {
  item: Item;
  cluesRevealed: number;
  lastGuessWasWrong: boolean;
  guesses: GuessAttempt[];
  onSubmitGuess: (value: string) => void;
  onRevealNextClue: () => void;
  onRevealAnswer: () => void;
}

export function GameScreen({
  item,
  cluesRevealed,
  lastGuessWasWrong,
  onSubmitGuess,
  onRevealNextClue,
  onRevealAnswer,
}: GameScreenProps) {
  const points = pointsForClueCount(cluesRevealed);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-6 px-6 py-10">
      <h1 className="text-center font-display text-2xl font-bold tracking-tight text-text-primary">
        Who Am I?
      </h1>

      <ScoreBadge
        points={points}
        cluesRevealed={cluesRevealed}
        maxClues={MAX_CLUES}
      />

      <ClueList item={item} cluesRevealed={cluesRevealed} />

      <div className="mt-auto flex flex-col gap-4 pt-4">
        <GuessForm onSubmit={onSubmitGuess} wasWrong={lastGuessWasWrong} />
        <RevealControls
          cluesRevealed={cluesRevealed}
          maxClues={MAX_CLUES}
          onRevealNextClue={onRevealNextClue}
          onRevealAnswer={onRevealAnswer}
        />
      </div>
    </div>
  );
}
