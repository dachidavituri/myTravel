/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router";
import { MAIN_PATH } from "../index.enum";
import { lazy, Suspense } from "react";
const LoginView = lazy(() => import("@/pages/login/views"));
const RegisterView = lazy(() => import("@/pages/register/views"));
export const AUTH_ROUTES = [
  <Route
    key="login"
    path={MAIN_PATH.LOGIN}
    element={
      <Suspense fallback={<div>Loading</div>}>
        <LoginView />
      </Suspense>
    }
  />,
  <Route
    key="register"
    path={MAIN_PATH.REGISTER}
    element={
      <Suspense fallback={<div>Loading</div>}>
        <RegisterView />
      </Suspense>
    }
  />,
];
