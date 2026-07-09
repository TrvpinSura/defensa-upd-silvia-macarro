import { useLocation } from "react-router";

import type { NavItem } from "@/types/navitem.interface";

import { CustomNavLink } from "./CustomNavLink";

import logo from "@/assets/icons/main_logo.png";
import navHome from "@/assets/icons/nav_home_icon.png";
import navUnits from "@/assets/icons/nav_units_icon.png";

const navItems: NavItem[] = [
  { to: '/', label: 'Inicio', image: navHome },
  { to: '/units', label: 'Unidades', image: navUnits },
];

export const CustomHeader = () => {

  const { pathname } = useLocation();
  const isActive = (path: string) => pathname == path;

  return (
    <header className="sticky top-0 z-50 w-full pt-2 pl-4">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-28 bg-background md:h-26" />

      <div className="relative h-20 mb-8">
        {/* Logo */}
        <img
          src={logo}
          alt="La Sociedad Secreta de los Grandes Descubridores"
          className="absolute z-10 w-30 drop-shadow-sm shrink-0 md:w-44 lg:w-50 xl:w-56"
        />

        {/* Navigation */}
        <nav className="ml-30 md:ml-44 lg:ml-50 xl:ml-56">
          <div className="mx-auto flex w-full max-w-[72%] justify-center gap-4 border-b border-pastel-brown-soft lg:gap-8">
            {navItems.map((item) => (
              <CustomNavLink
                key={item.to}
                item={item}
                isActive={isActive(item.to)}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
