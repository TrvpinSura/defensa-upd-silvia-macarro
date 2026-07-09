import { useNavigate } from "react-router";

import { useUnit } from "@/hooks/useUnit";
// import { getUnitWithCategoryById } from "@/data/data.utils";

import { Button } from "@base-ui/react";

import { EmptyCell } from "./EmptyCell";

interface Props {
  unitId: number;
}

export const UnitCell = ({ unitId }: Props) => {

  const navigate = useNavigate();

  // const unit = getUnitWithCategoryById(unitId);
  const { unit } = useUnit({ id: unitId });

  if (!unit) {
    return (
      <EmptyCell
        title="Unidad no encontrada"
        subtitle={`Id: ${unitId}`}
      />
    );
  }

  const handleClick = () => {
    navigate(`/unit/${unit.id}`);
  };

  return (
    <Button
      onClick={handleClick}
      className="group relative flex w-full h-32 gap-1 items-center bg-cream/70 px-2 py-4 cursor-pointer
      md:gap-4
      xl:gap-0"
    >
      <img
        src={unit.image}
        alt=""
        className="h-24 w-24 shrink-0 object-contain
        md:h-26 md:w-26
        xl:h-24 xl:w-24"
      />

      <div className="pr-14 md:pr-18 xl:pr-13">
        <h3
          className={`font-caveat text-3xl leading-none text-start ${unit.color} transition-all duration-200 group-hover:underline
          md:text-4xl
          xl:text-3xl xl:text-center`}
        >
          {unit.title}
        </h3>
      </div>

      <img
        src={unit.category.icon}
        alt=""
        className="absolute bottom-1 right-1 h-14 w-14 object-contain transition-transform duration-200 group-hover:scale-110
        md:h-18 md:w-18
        xl:h-13 xl:w-13"
      />
    </Button>
  );
};
