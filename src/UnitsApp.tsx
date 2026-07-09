import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const UnitsApp = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};
