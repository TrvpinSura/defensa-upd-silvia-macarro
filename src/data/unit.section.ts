import type { UnitSection } from "@/types/unit.section.interface";

import unitSection1 from "@/assets/icons/sections/unit_section_1_icon.png";
import unitSection2 from "@/assets/icons/sections/unit_section_2_icon.png";
import unitSection3 from "@/assets/icons/sections/unit_section_3_icon.png";
import unitSection4 from "@/assets/icons/sections/unit_section_4_icon.png";
import unitSection5 from "@/assets/icons/sections/unit_section_5_icon.png";
import unitSection6 from "@/assets/icons/sections/unit_section_6_icon.png";
import unitSection7 from "@/assets/icons/sections/unit_section_7_icon.png";
import unitSection8 from "@/assets/icons/sections/unit_section_8_icon.png";

export const unitSections: UnitSection[] = [
  {
    id: "introduction",
    label: "Introducción",
    icon: unitSection1,
    color: "var(--color-soft-purple)",
  },
  {
    id: "context",
    label: "Características del alumnado",
    icon: unitSection2,
    color: "var(--color-pastel-blue)",
  },
  {
    id: "curricular-elements",
    label: "Elementos curriculares",
    icon: unitSection3,
    color: "var(--color-pastel-lime)",
  },
  {
    id: "structure",
    label: "Desarrollo de la unidad",
    icon: unitSection4,
    color: "var(--color-pastel-pink)",
  },
  {
    id: "diversity",
    label: "Atención a la diversidad",
    icon: unitSection5,
    color: "var(--color-pastel-yellow)",
  },
  {
    id: "coordination",
    label: "Formas de coordinación",
    icon: unitSection6,
    color: "var(--color-pastel-green)",
  },
  {
    id: "conclusion",
    label: "Conclusión",
    icon: unitSection7,
    color: "var(--color-pastel-orange)",
  },
  {
    id: "bibliographic",
    label: "Referencias bibliográficas",
    icon: unitSection8,
    color: "var(--color-pastel-red)",
  },
];