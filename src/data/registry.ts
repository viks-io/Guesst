import type { Category } from "../game/types";
import { footballPlayersCategory } from "./categories/footballPlayers";

/**
 * Every playable category. Adding a new one later is just:
 * 1. create `data/categories/<name>.ts` exporting a Category
 * 2. add it to this list
 */
export const CATEGORIES: Category[] = [footballPlayersCategory];
