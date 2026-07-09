import { cn } from "@/lib/utils";

import { CustomIcon } from "./CustomIcon";
import { CustomTitle } from "./CustomTitle";

type CardDirection = "default" | "reverse";

interface Props {
  label: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  direction?: CardDirection;
  className?: string;
}

export const SimpleStructureCard = ({ label, icon, color, borderColor, bgColor, direction = "default", className }: Props) => {

  const isReverse = direction === "reverse";

  return (
    <article
      className={cn(`
        group relative flex items-center justify-center rounded-full border-2 border-dashed shadow-[0_18px_40px_-30px_oklch(0.35_0.08_60/0.55)]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_-30px_oklch(0.35_0.08_60/0.7)]
        h-26 px-5 py-4
        md:h-30 
        lg:h-26`,
        bgColor,
        borderColor,
        className
      )}
    >
      <div
        className={cn(`
          absolute flex items-center justify-center rounded-full border-2 border-dashed bg-background/90 shadow-sm ring-1 ring-white/70
          h-22 w-22
          md:h-26 md:w-26
          xl:h-24 xl:w-24`,
          isReverse ? "-right-3" : "-left-3",
          borderColor
        )}
      >
        <CustomIcon icon={icon} />
      </div>

      <CustomTitle
        label={label}
        color={color}
        className={cn(isReverse ? "pr-12" : "pl-12")}
      />
    </article>
  );
};