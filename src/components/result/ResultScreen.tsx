import type { ResultSummary } from "../../game/types";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface ResultScreenProps {
  result: ResultSummary;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export function ResultScreen({ result, onPlayAgain, onGoHome }: ResultScreenProps) {
  const { item, outcome, pointsAwarded, cluesUsed } = result;
  const guessed = outcome === "guessed";

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-6 px-6 py-10">
      <div className="animate-pop-in flex flex-col items-center gap-3 text-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
            guessed ? "bg-success/15 text-success" : "bg-surface-raised text-text-secondary"
          }`}
        >
          {guessed ? "✓" : "🔍"}
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary">
          {guessed ? "Correct!" : "Here's who it was"}
        </h1>
        <p className="font-display text-xl font-semibold text-brand">
          {item.answer}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="items-center gap-1 py-5 text-center">
          <p className="font-display text-2xl font-bold text-text-primary">
            {pointsAwarded}
          </p>
          <p className="text-xs uppercase tracking-wide text-text-secondary">
            {pointsAwarded === 1 ? "Point earned" : "Points earned"}
          </p>
        </Card>
        <Card className="items-center gap-1 py-5 text-center">
          <p className="font-display text-2xl font-bold text-text-primary">
            {cluesUsed}
          </p>
          <p className="text-xs uppercase tracking-wide text-text-secondary">
            {cluesUsed === 1 ? "Clue needed" : "Clues needed"}
          </p>
        </Card>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
          All clues
        </p>
        <ol className="flex flex-col gap-2">
          {item.clues.map((clue, index) => (
            <li
              key={index}
              className="flex gap-3 rounded-2xl bg-surface px-5 py-3 text-left"
            >
              <span className="font-display text-sm font-bold text-brand">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-text-secondary">
                {clue.text}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-4">
        <Button onClick={onPlayAgain}>Play Again</Button>
        <Button variant="ghost" onClick={onGoHome}>
          Back to categories
        </Button>
      </div>
    </div>
  );
}
