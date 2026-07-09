import type { Category, categoryId } from "@/types/category.interface";
import type { Level } from "@/types/level.interface";
import type { Unit, UnitWithCategory } from "@/types/unit.interface";
import type { UnitSection, UnitSectionId } from "@/types/unit.section.interface";

import { categories } from "./categories";
import { units } from "./units";
import { unitSections } from "./unit.section";

export const getCategoryById = (id: categoryId): Category | undefined => categories.find((category) => category.id === id);

export const getUnitById = (id: number): Unit | undefined => units.find((unit) => unit.id === id);

export const getUnitSectionById = (id: UnitSectionId): UnitSection | undefined => unitSections.find((section) => section.id === id);

export const getUnitWithCategoryById = (
  id: number
): UnitWithCategory | undefined => {
  const unit = getUnitById(id);

  if (!unit) return undefined;

  const category = getCategoryById(unit.categoryId);

  if (!category) return undefined;

  return {
    ...unit,
    category,
  };
};

export const getUnitsByLevel = (level: Level): UnitWithCategory[] => {
  return level.unitIds.reduce<UnitWithCategory[]>((acc, unitId) => {
    const unit = getUnitWithCategoryById(unitId);

    if (unit) {
      acc.push(unit);
    }

    return acc;
  }, []);
};
