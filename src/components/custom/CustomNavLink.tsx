import { Link } from "react-router";

import type { NavItem } from "@/types/navitem.interface";

interface Props {
  item: NavItem;
  isActive: boolean;
}

export const CustomNavLink = ({ item, isActive }: Props) => {
  return (
    <Link
      to={item.to}
      data-active={isActive}
      className="custom-nav-link"
    >
      <img
        src={item.image}
        alt={item.label}
        className="custom-nav-link-image"
      />

      <span className="custom-nav-link-label">
        {item.label}
      </span>

      <span className="custom-nav-link-underline" />
    </Link>
  );
};
