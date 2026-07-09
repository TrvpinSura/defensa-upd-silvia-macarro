import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionTitle {
  container: string;
  label: string;
  color: string;
}

interface Props {
  id: string;
  title?: SectionTitle;
  first?: boolean;
  last?: boolean;
  className?: string;
  children?: ReactNode;
}

export const UnitSection = ({ id, title, first = false, last = false, className, children }: Props) => {

  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className={cn(`
        scroll-mt-68 
        md:scroll-mt-84 
        lg:scroll-mt-86 
        xl:scroll-mt-40`,
        first ? "mt-0" : "mt-16 md:mt-24 lg:mt-26 xl:mt-26",
        last ? "mb-16 md:mb-24 lg:mb-26 xl:mb-26" : "mb-0",
        className
      )}
      aria-labelledby={title ? titleId : undefined}
    >
      {title && (
        <div
          className="mx-auto flex items-center justify-center bg-contain bg-center bg-no-repeat 
          h-20
          md:h-30 
          lg:h-32 
          xl:h-32"
          style={{ backgroundImage: `url(${title.container})` }}
        >
          <h2
            id={titleId}
            className={cn(`
              text-center font-playwrite font-bold leading-tight              
              text-xl max-w-78 
              md:text-3xl md:max-w-xl 
              lg:text-4xl lg:max-w-lg`,
              title.color
            )}
          >
            {title.label}
          </h2>
        </div>
      )}

      {children}
    </section>
  );
};