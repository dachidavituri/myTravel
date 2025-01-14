/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router";
import { MAIN_PATH } from "../index.enum";
import { lazy, Suspense } from "react";
import AuthRegisterGuard from "@/components/guard/auth-guard";
import Loading from "@/components/loading";
const LoginView = lazy(() => import("@/pages/login/views"));
const RegisterView = lazy(() => import("@/pages/register/views"));
export const AUTH_ROUTES = [
  <Route
    key={MAIN_PATH.LOGIN}
    path={MAIN_PATH.LOGIN}
    element={
      <Suspense fallback={<Loading />}>
        <AuthRegisterGuard>
          <LoginView />
        </AuthRegisterGuard>
      </Suspense>
    }
  />,
  <Route
    key={MAIN_PATH.REGISTER}
    path={MAIN_PATH.REGISTER}
    element={
      <Suspense fallback={<Loading />}>
        <AuthRegisterGuard>
          <RegisterView />
        </AuthRegisterGuard>
      </Suspense>
    }
  />,
];
