import { Route } from "react-router";
import { MAIN_PATH } from "../index.enum";

export const AUTH_ROUTES = [
  <Route key="login" path={MAIN_PATH.LOGIN} element={<div>login</div>} />,
  <Route
    key="register"
    path={MAIN_PATH.REGISTER}
    element={<div>register</div>}
  />,
];
