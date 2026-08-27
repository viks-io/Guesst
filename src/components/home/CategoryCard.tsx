import type { Category } from "../../game/types";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

interface CategoryCardProps {
  category: Category;
  onPlay: (category: Category) => void;
}

export function CategoryCard({ category, onPlay }: CategoryCardProps) {
  return (
    <Card className="flex flex-col items-center gap-5 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-raised text-4xl">
        <span aria-hidden="true">{category.icon}</span>
      </div>
      <div className="space-y-1">
        <h2 className="font-display text-xl font-semibold text-text-primary">
          {category.name}
        </h2>
        <p className="text-sm text-text-secondary">{category.description}</p>
      </div>
      <Button onClick={() => onPlay(category)}>Play</Button>
    </Card>
  );
}
