import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { MainLayout } from "../units/layouts/MainLayout";
const UnitLayout = lazy(() => import('../units/layouts/UnitLayout'));

import { HomePage } from "../units/pages/home/HomePage";
import { UnitsPage } from "../units/pages/units/UnitsPage";
import { UnitPage } from "@/units/pages/unit/UnitPage";

// export const appRouter = createHashRouter([
export const appRouter = createBrowserRouter([
  // Main routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'units',
        element: <UnitsPage />
      },
      {
        path: 'unit',
        element: <UnitLayout />,
        children: [
          {
            path: ':id',
            element: <UnitPage />
          },
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);