import { CustomHeader } from "@/components/custom/CustomHeader";
import { Outlet, ScrollRestoration } from "react-router";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollRestoration />
      <CustomHeader />
      <Outlet />
    </div>
  );
};
