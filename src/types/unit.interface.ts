import type { Category, categoryId } from "./category.interface";

export interface Unit {
  id: number;
  title: string;
  image: string;
  categoryId: categoryId;
  color: string;
  portraitImage: string;
}

export interface UnitWithCategory extends Unit {
  category: Category;
}