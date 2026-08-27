import type { Category } from "../../game/types";
import { CategoryCard } from "./CategoryCard";

interface HomeScreenProps {
  categories: Category[];
  onPlay: (category: Category) => void;
}

export function HomeScreen({ categories, onPlay }: HomeScreenProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col items-center justify-center gap-12 px-6 py-16">
      <div className="space-y-3 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-text-primary">
          Guesst
        </h1>
        <p className="text-lg text-text-secondary">
          How quickly can you guess it?
        </p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
}
