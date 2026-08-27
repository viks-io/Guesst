import { useState, type FormEvent } from "react";
import { Button } from "../ui/Button";

interface GuessFormProps {
  onSubmit: (value: string) => void;
  wasWrong: boolean;
}

export function GuessForm({ onSubmit, wasWrong }: GuessFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <input
        type="text"
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="words"
        spellCheck={false}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Your guess…"
        className="h-14 w-full rounded-2xl border border-white/10 bg-surface px-5 text-base text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
      {wasWrong && (
        <p className="animate-fade-in-up text-sm font-medium text-warn">
          Not quite. Try again or reveal another clue.
        </p>
      )}
      <Button type="submit" disabled={!value.trim()}>
        Guess
      </Button>
    </form>
  );
}
