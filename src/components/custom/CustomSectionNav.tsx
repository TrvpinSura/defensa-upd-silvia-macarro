import { useLocation } from "react-router";

import { CustomSectionNavItem } from "./CustomSectionNavItem";

import type { UnitSection } from "@/types/unit.section.interface";

interface Props {
  items: UnitSection[];
  className?: string;
}

export const CustomSectionNav = ({ items, className }: Props) => {

  const { hash } = useLocation();
  const isActive = (id: string) => hash == id;

  return (
    <aside className={className}>
      {/* Background */}
      <div
        aria-hidden="true"
        className="custom-section-nav-backdrop"
      />

      {/* Navigation */}
      <nav aria-label="Navegación de apartados">
        <div className="custom-section-nav">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center
              xl:flex-col"
            >
              <CustomSectionNavItem
                id={item.id}
                icon={item.icon}
                label={item.label}
                color={item.color}
                isActive={isActive(`#${item.id}`)}
              />

              {/* Separator line */}
              {index < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="custom-section-nav-separator"
                />
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};