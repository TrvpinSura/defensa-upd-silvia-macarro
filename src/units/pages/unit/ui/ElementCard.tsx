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

export const ElementCard = ({ label, icon, color, borderColor, bgColor, direction = "default", className }: Props) => {

  const isReverse = direction === "reverse";

  return (
    <article
      className={cn(`
        group flex items-center justify-start rounded-xl border-2 border-dashed shadow-[0_18px_40px_-28px_oklch(0.35_0.08_60/0.55)]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_oklch(0.35_0.08_60/0.7)]
        h-28 gap-4 px-5 py-4
        md:h-32 
        lg:h-28`,
        bgColor,
        borderColor,
        isReverse ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      <CustomIcon icon={icon} />

      <CustomTitle label={label} color={color} className="flex-1" />
    </article>
  );
};
