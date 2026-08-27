interface ScoreBadgeProps {
  points: number;
  cluesRevealed: number;
  maxClues: number;
}

export function ScoreBadge({ points, cluesRevealed, maxClues }: ScoreBadgeProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-surface px-5 py-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
          Clue {cluesRevealed} of {maxClues}
        </p>
        <p className="font-display text-lg font-semibold text-text-primary">
          {points} {points === 1 ? "point" : "points"} available
        </p>
      </div>
      <div className="font-display text-3xl font-bold text-brand">{points}</div>
    </div>
  );
}
