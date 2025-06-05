import React, { lazy, Suspense } from "react";

const Overview = lazy(() => import("./pages/overview"));
const Create = lazy(() => import("./pages/create"));
const View = lazy(() => import("./pages/view"));
const Edit = lazy(() => import("./pages/edit"));

// Lazy loading our routes
export const routes = [
  {
    path: "/create",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Create />
      </Suspense>
    ),
  },
  {
    path: "/edit/:id",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Edit />
      </Suspense>
    ),
  },
  {
    path: "/view",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <View />
      </Suspense>
    ),
  },
  {
    path: "/",
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Overview />
      </Suspense>
    ),
  },
];
