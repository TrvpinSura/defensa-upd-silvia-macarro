import { useMemo } from "react";

import { getUnitSectionById } from "@/data/data.utils";

import type { UnitSectionId } from "@/types/unit.section.interface";

interface Props {
  id: UnitSectionId;
}

export const useUnitSection = ({ id }: Props) => {
  const section = useMemo(() => {
    return getUnitSectionById(id);
  }, [id]);

  return {
    section,
  };
};