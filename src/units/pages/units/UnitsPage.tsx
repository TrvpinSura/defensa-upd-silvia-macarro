import { CategoryCell } from "./ui/CategoryCell";
import { UnitColumn } from "./ui/UnitColumn";

import { categories } from "@/data/categories";
import { levels } from "@/data/levels";

import titleContainer from "@/assets/containers/container_2.png";

export const UnitsPage = () => {

  return (
    <main>
      <section className="mx-auto w-full max-w-350 px-4 pt-4 pb-8
      md:px-6 md:pt-10
      xl:px-8 xl:pt-0">
        {/* Title */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center mb-4
        lg:mb-6
        xl:mb-6
        ">
          <div
            className="flex min-h-15 w-full items-center justify-center bg-contain bg-center bg-no-repeat 
            md:min-h-20
            lg:min-h-26
            xl:min-h-22"
            style={{ backgroundImage: `url(${titleContainer})` }}
          >
            <h1 className="font-playwrite text-2xl -translate-y-1 font-bold text-deep-ink-blue 
            md:text-4xl
            lg:text-5xl
            xl:text-4xl">
              Mapa de unidades
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-caveat text-2xl text-soft-ink-blue 
          md:text-3xl">
            Elige tu próxima aventura por unidad y nivel
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-15 
        xl:grid-cols-[0.96fr_1fr_1fr_1fr] xl:items-start xl:gap-4">

          {/* Categories */}
          <div className="flex flex-col overflow-hidden rounded-3xl border-2 border-dashed border-pastel-brown/50 divide-y-2 divide-dashed divide-pastel-brown/50 
          xl:translate-y-19">
            {categories.map((category) => (
              <CategoryCell key={category.id} categoryId={category.id} />
            ))}
          </div>

          {/* Levels */}
          {levels.map((level) => (
            <UnitColumn key={level.id} level={level} />
          ))}
        </div>
      </section >
    </main >
  );
};
