import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { MainLayout } from "../units/layouts/MainLayout";
const UnitLayout = lazy(() => import('../units/layouts/UnitLayout'));

import { HomePage } from "../units/pages/home/HomePage";
import { UnitsPage } from "../units/pages/units/UnitsPage";
import { UnitPage } from "@/units/pages/unit/UnitPage";
// import { CoverPage } from "../units/pages/unit/cover/CoverPage";
// import { IntroPage } from "@/units/pages/unit/intro/IntroPage";
// import { ContextPage } from "@/units/pages/unit/context/ContextPage";
// import { CurricularPage } from "@/units/pages/unit/curricular/CurricularPage";
// import { StructurePage } from "@/units/pages/unit/structure/StructurePage";
// import { DiversityPage } from "@/units/pages/unit/diversity/DiversityPage";
// import { CoordinationPage } from "@/units/pages/unit/coordination/CoordinationPage";
// import { ConclusionPage } from "@/units/pages/unit/conclusion/ConclusionPage";
// import { BibliographicPage } from "@/units/pages/unit/bibliographic/BibliographicPage";

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
          // {
          //   path: 'cover',
          //   element: <CoverPage />
          // },
          // {
          //   path: 'intro',
          //   element: <IntroPage />
          // },
          // {
          //   path: 'context',
          //   element: <ContextPage />
          // },
          // {
          //   path: 'curricular',
          //   element: <CurricularPage />
          // },
          // {
          //   path: 'structure',
          //   element: <StructurePage />
          // },
          // {
          //   path: 'diversity',
          //   element: <DiversityPage />
          // },
          // {
          //   path: 'coordination',
          //   element: <CoordinationPage />
          // },
          // {
          //   path: 'conclusion',
          //   element: <ConclusionPage />
          // },
          // {
          //   path: 'bibliographic',
          //   element: <BibliographicPage />
          // },
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);