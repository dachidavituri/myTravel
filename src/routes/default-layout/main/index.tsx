import { Route } from "react-router";
import { MAIN_PATH } from "../index.enum";

export const MAIN_ROUTES = [
  <Route key="home" path={MAIN_PATH.HOME} element={<div>home</div>}></Route>,
  <Route key="about" path={MAIN_PATH.ABOUT} element={<div>about</div>}></Route>,
  <Route key="tours" path={MAIN_PATH.TOURS} element={<div>tours</div>}></Route>,
  <Route
    key="gallery"
    path={MAIN_PATH.GALLERY}
    element={<div>gallery</div>}
  ></Route>,
];
