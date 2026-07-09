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

const orbitLayouts: Record<number, { top: string; left: string; }[]> = {
  1: [
    { top: "23%", left: "52%" },
  ],

  2: [
    { top: "26%", left: "32%" },
    { top: "73%", left: "68%" },
  ],

  3: [
    { top: "20%", left: "54%" },
    { top: "72%", left: "29%" },
    { top: "78%", left: "71%" },
  ],

  4: [
    { top: "18%", left: "28%" },
    { top: "27%", left: "82%" },
    { top: "70%", left: "20%" },
    { top: "80%", left: "76%" },
  ],

  5: [
    { top: "19%", left: "33%" },
    { top: "24%", left: "74%" },
    { top: "48%", left: "19%" },
    { top: "76%", left: "41%" },
    { top: "61%", left: "81%" },
  ],

  6: [
    { top: "18%", left: "29%" },
    { top: "23%", left: "69%" },
    { top: "46%", left: "17%" },
    { top: "55%", left: "83%" },
    { top: "77%", left: "34%" },
    { top: "73%", left: "71%" },
  ],

  7: [
    { top: "18%", left: "18%" },
    { top: "23%", left: "54%" },
    { top: "16%", left: "82%" },
    { top: "46%", left: "15%" },
    { top: "52%", left: "87%" },
    { top: "82%", left: "30%" },
    { top: "78%", left: "70%" },
  ],

  8: [
    { top: "14%", left: "21%" },
    { top: "12%", left: "49%" },
    { top: "18%", left: "80%" },
    { top: "42%", left: "14%" },
    { top: "54%", left: "86%" },
    { top: "80%", left: "22%" },
    { top: "84%", left: "55%" },
    { top: "76%", left: "80%" },
  ],
};

const getOrbitPositions = (count: number) => {
  if (orbitLayouts[count]) return orbitLayouts[count];
  return orbitLayouts[8];
};

export const GroupStructureCard = ({ label, color, borderColor, bgColor, icons, className }: Props) => {
  const positions = getOrbitPositions(icons.length);

  return (
    <article
      className={cn(`
        group relative overflow-hidden rounded-[2.25rem] border-2 border-dashed shadow-[0_24px_50px_-34px_oklch(0.35_0.08_60/0.65)]
        h-80 px-4 py-5
        md:h-96
        xl:h-104`,
        borderColor,
        bgColor,
        className
      )}
    >
      {/* Decor line */}
      <svg
        className="pointer-events-none absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] text-pastel-brown/45"
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="200"
          cy="150"
          rx="142"
          ry="96"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="3 9"
          strokeLinecap="round"
        />
        <ellipse
          cx="200"
          cy="150"
          rx="102"
          ry="126"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      {/* Title */}
      <div
        className="absolute flex left-1/2 top-1/2 z-10 items-center justify-center text-center -translate-x-1/2 -translate-y-1/2 
        rounded-[2rem] border-2 border-dashed border-pastel-brown/35 bg-background/85 shadow-sm backdrop-blur-sm 
        h-24 w-58 px-5 py-4
        md:w-64 
        xl:w-58
        ">
        <CustomTitle label={label} color={color} />
      </div>

      {/* Icons */}
      {icons.map((icon, index) => {
        const position = positions[index % positions.length];

        return (
          <div
            key={`${label}-${index}`}
            className="absolute flex items-center justify-center z-10
            "
            style={{
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <CustomIcon icon={icon} />
          </div>
        );
      })}
    </article>
  );
};