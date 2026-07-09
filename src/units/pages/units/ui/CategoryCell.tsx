import { useCategory } from "@/hooks/useCategory";

import type { categoryId } from "@/types/category.interface";

import { EmptyCell } from "./EmptyCell";

interface Props {
  categoryId: categoryId;
}

export const CategoryCell = ({ categoryId }: Props) => {

  // const category = getCategoryById(categoryId);
  const { category } = useCategory({ id: categoryId });

  if (!category) {
    return (
      <EmptyCell
        title="Categoría no encontrada"
        subtitle={`Id: ${categoryId}`}
      />
    );
  }

  return (
    <div className="flex h-32 items-center gap-4 bg-cream/70 px-4 py-6">
      <img
        src={category.icon}
        alt=""
        className="h-22 w-22 shrink-0 object-contain
        md:h-26 md:w-26
        xl:h-22 xl:w-22"
      />

      <div>
        <h3 className={`font-caveat text-3xl text-start leading-none ${category.color}
        md:text-4xl
        xl:text-3xl`}
        >
          {category.title}
        </h3>

        <p className="font-indieflower font-bold mt-2 text-md leading-none text-soft-ink-blue
        md:text-lg
        xl:text-sm
        ">
          {category.subtitle}
        </p>
      </div>
    </div>
  );
};