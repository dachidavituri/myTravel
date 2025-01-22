import { Routes, Route, Navigate } from "react-router";
import { ROOT_PATH } from "./index.enum";
import { DEFAULT_LAYOUT_ROUTES } from "./default-layout";
import Layout from "@/components/layout";
import { lazy, Suspense } from "react";
const NotFound = lazy(() => import("@/pages/not-found"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:lang" element={<Layout />}>
        {DEFAULT_LAYOUT_ROUTES}
      </Route>
      <Route
        path={ROOT_PATH.ROOT}
        element={<Navigate to={ROOT_PATH.REDIRECT} />}
      ></Route>
      <Route
        path={ROOT_PATH.NOTFOUND}
        element={
          <Suspense>
            <NotFound />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};
export default AppRoutes;
