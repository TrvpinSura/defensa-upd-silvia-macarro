import { UnitCell } from "./UnitCell";

import type { Level } from "@/types/level.interface";

interface Props {
  level: Level;
}

export const UnitColumn = ({ level }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Primera fila / cabecera */}
      <img
        src={level.headerImage}
        alt=""
        className=" mx-auto w-full h-22 object-contain -mb-3 z-10 
        md:h-26
        lg:h-28
        xl:h-20"
      />

      {/* Celdas */}
      <div className="overflow-hidden rounded-3xl border-2 border-dashed border-pastel-brown/50 divide-y-2 divide-dashed divide-pastel-brown/50">
        {level.unitIds.map((unit) => (
          <UnitCell key={unit} unitId={unit} />
        ))}
      </div>
    </div>
  );
};

