import { useMemo } from "react";

import { getCategoryById } from "@/data/data.utils";

import type { categoryId } from "@/data/categories";

interface Props {
  id: categoryId;
}

export const useCategory = ({ id }: Props) => {
  const category = useMemo(() => {
    return getCategoryById(id);
  }, [id]);

  return {
    category,
  };
};
