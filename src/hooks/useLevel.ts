import { useMemo } from "react";

import { getUnitsByLevel } from "@/data/data.utils";

import type { Level } from "@/types/level.interface";

interface Props {
  level: Level;
}

export const useLevel = ({ level }: Props) => {
  const units = useMemo(() => {
    return getUnitsByLevel(level);
  }, [level]);

  return {
    units,
  };
};