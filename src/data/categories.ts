import type { Category } from "@/types/category.interface";

import category1 from "@/assets/icons/categories/category_1_icon.png";
import category2 from "@/assets/icons/categories/category_2_icon.png";
import category3 from "@/assets/icons/categories/category_3_icon.png";
import category4 from "@/assets/icons/categories/category_4_icon.png";
import category5 from "@/assets/icons/categories/category_5_icon.png";

export const categories: Category[] = [
  {
    id: "environment",
    title: "Mi entorno",
    subtitle: "Conectamos áreas para comprender nuestro mundo.",
    icon: category1,
    color: "text-pastel-blue",
  },
  {
    id: "body",
    title: "Mi cuerpo",
    subtitle: "Descubrimos y cuidamos nuestro cuerpo humano.",
    icon: category2,
    color: "text-pastel-pink",
  },
  {
    id: "planet",
    title: "Nuestro planeta",
    subtitle: "Aprendemos a cuidar y comprender la Tierra, su vida y el espacio.",
    icon: category3,
    color: "text-pastel-green",
  },
  {
    id: "history",
    title: "Cómo vivían antes",
    subtitle: "Recreamos el pasado para entender de dónde venimos.",
    icon: category4,
    color: "text-pastel-yellow",
  },
  {
    id: "science",
    title: "Magia, ciencia e inventos",
    subtitle: "Experimentamos, creamos y soñamos con inventar.",
    icon: category5,
    color: "text-pastel-orange",
  },
];