import { useMemo } from "react";

import { getUnitsByLevel } from "@/data/data.utils";

import type { Level } from "@/data/levels";

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