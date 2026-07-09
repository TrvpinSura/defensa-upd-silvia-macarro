import type { Level } from "@/types/level.interface";

import header3 from "@/assets/containers/level_3_header.png";
import header4 from "@/assets/containers/level_4_header.png";
import header5 from "@/assets/containers/level_5_header.png";

export const levels: Level[] = [
  {
    id: 3,
    title: "Iniciación a la exploración",
    unitIds: [1, 2, 3, 4, 5],
    headerImage: header3
  },
  {
    id: 4,
    title: "Exploración avanzada",
    unitIds: [6, 7, 8, 9, 10],
    headerImage: header4
  },
  {
    id: 5,
    title: "Grandes descubridores",
    unitIds: [11, 12, 13, 14, 15],
    headerImage: header5
  }
];