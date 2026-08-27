import type { Item } from "../../game/types";

interface ClueListProps {
  item: Item;
  cluesRevealed: number;
}

export function ClueList({ item, cluesRevealed }: ClueListProps) {
  return (
    <ol className="flex w-full flex-col gap-3">
      {item.clues.slice(0, cluesRevealed).map((clue, index) => (
        <li
          key={index}
          className="animate-fade-in-up flex gap-3 rounded-2xl bg-surface-raised px-5 py-4 text-left"
        >
          <span className="font-display text-sm font-bold text-brand">
            {index + 1}
          </span>
          <p className="text-[15px] leading-relaxed text-text-primary">
            {clue.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
