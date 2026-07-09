export type categoryId = "environment" | "body" | "planet" | "history" | "science";

export interface Category {
  id: categoryId;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}