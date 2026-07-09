import { cn } from "@/lib/utils";

import { CustomTitle } from "./CustomTitle";
import { CustomIcon } from "./CustomIcon";

interface Props {
  label: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  direction?: "default" | "reverse";
  className?: string;
}

export const CoordinationCard = ({ label, icon, color, borderColor, bgColor, direction = "default", className }: Props) => {

  const isReverse = direction === "reverse";

  return (
    <article
      className={cn(`
        group relative flex items-center overflow-hidden rounded-lg border-2 border-dashed shadow-[0_22px_50px_-32px_oklch(0.35_0.08_60/0.65)]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-32px_oklch(0.35_0.08_60/0.75)]
        h-22 gap-4 px-5 py-4
        md:h-32 
        lg:h-28`,
        isReverse ? "flex-row-reverse text-right" : "flex-row text-left",
        borderColor,
        bgColor,
        className
      )}
    >
      <div
        className={cn(
          "absolute",
          isReverse ? "-right-8 -top-8" : "-left-8 -top-8"
        )}
      />

      <CustomIcon icon={icon} />

      <div className="relative z-10 flex flex-1 flex-col">
        <span
          className="font-caveat font-bold leading-none text-center text-soft-ink-blue/70
          text-xl 
          md:text-2xl"
        >
          con
        </span>

        <CustomTitle label={label} color={color} className="mt-1" />
      </div>
    </article>
  );
};
