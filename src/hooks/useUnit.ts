import { useMemo } from "react";

import { getUnitWithCategoryById } from "@/data/data.utils";

interface Props {
  id: number;
}

export const useUnit = ({ id }: Props) => {
  const unit = useMemo(() => {
    return getUnitWithCategoryById(id);
  }, [id]);

  return {
    unit,
  };
};