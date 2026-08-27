import type { Item } from "./types";

/** Picks a random item, avoiding `excludeId` when there's more than one option. */
export function pickRandomItem(items: Item[], excludeId?: string): Item {
  const pool =
    excludeId && items.length > 1
      ? items.filter((item) => item.id !== excludeId)
      : items;
  return pool[Math.floor(Math.random() * pool.length)];
}
