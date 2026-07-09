import { cn } from "@/lib/utils";

import { CustomIcon } from "./CustomIcon";
import { CustomTitle } from "./CustomTitle";

interface Props {
  label: string;
  color: string;
  borderColor: string;
  bgColor: string;
  icons: string[];
  className?: string;
}

export const GroupAltStructureCard = ({ label, color, borderColor, bgColor, icons, className }: Props) => {
  return (
    <article
      className={cn(`
        group relative overflow-hidden rounded-[2.25rem] border-2 border-dashed shadow-[0_24px_50px_-34px_oklch(0.35_0.08_60/0.65)]
        h-70 px-4 py-5
        md:h-76
        xl:h-72`,
        borderColor,
        bgColor,
        className
      )}
    >
      <div
        className="mx-auto flex items-center justify-center text-center rounded-[2rem] border-2 border-dashed border-pastel-brown/35 bg-background/85 shadow-sm
        h-24 w-58 px-5 py-4
        md:w-64 
        xl:w-58"
      >
        <CustomTitle label={label} color={color} />
      </div>

      <div className="mt-2 flex justify-center">
        <svg
          className="h-16 w-full max-w-sm text-pastel-brown/60"
          viewBox="0 0 360 90"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M180 4 L180 28"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="3 8"
            strokeLinecap="round"
          />

          <path
            d="M180 28 C135 34, 95 48, 65 72"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="3 8"
            strokeLinecap="round"
          />

          <path
            d="M180 28 C180 42, 180 56, 180 74"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="3 8"
            strokeLinecap="round"
          />

          <path
            d="M180 28 C225 34, 265 48, 295 72"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="3 8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {icons.map((icon, index) => (
          <div
            key={`${label}-${index}`}
            className="flex justify-center"
          >
            <CustomIcon icon={icon} />
          </div>
        ))}
      </div>
    </article>
  );
};