import { Outlet } from "react-router";

import { CustomSectionNav } from "@/components/custom/CustomSectionNav";

import { unitSections } from "@/data/unit.section";

const UnitLayout = () => {
  return (
    <>
      <CustomSectionNav items={unitSections} className="unit-layout-section-nav" />
      <Outlet />
    </>
  );
};

export default UnitLayout;