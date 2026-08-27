import { Button } from "../ui/Button";

interface RevealControlsProps {
  cluesRevealed: number;
  maxClues: number;
  onRevealNextClue: () => void;
  onRevealAnswer: () => void;
}

export function RevealControls({
  cluesRevealed,
  maxClues,
  onRevealNextClue,
  onRevealAnswer,
}: RevealControlsProps) {
  const atMaxClues = cluesRevealed >= maxClues;

  return atMaxClues ? (
    <Button variant="secondary" onClick={onRevealAnswer}>
      Reveal Answer
    </Button>
  ) : (
    <Button variant="secondary" onClick={onRevealNextClue}>
      Reveal Next Clue
    </Button>
  );
}
