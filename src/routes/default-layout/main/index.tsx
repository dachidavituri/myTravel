/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router";
import { ADDITION_PATH, MAIN_PATH } from "../index.enum";
import { lazy, Suspense } from "react";
import ProfileGuard from "@/components/guard/profile-guard";
const SettingsView = lazy(() => import("@/pages/settings/views"));
const ProfileView = lazy(() => import("@/pages/profile/views"));
const AboutView = lazy(() => import("@/pages/about/views"));

export const MAIN_ROUTES = [
  <Route key="home" path={MAIN_PATH.HOME} element={<div>home</div>}></Route>,
  <Route
    key="about"
    path={MAIN_PATH.ABOUT}
    element={
      <Suspense fallback={<div>loading</div>}>
        <AboutView />
      </Suspense>
    }
  ></Route>,
  <Route key="tours" path={MAIN_PATH.TOURS} element={<div>tours</div>}></Route>,
  <Route
    key="gallery"
    path={ADDITION_PATH.GALLERY}
    element={<div>gallery</div>}
  ></Route>,
  <Route
    key="settings"
    path={ADDITION_PATH.SETTINGS}
    element={
      <Suspense fallback={<div>Loading</div>}>
        <ProfileGuard>
          <SettingsView />
        </ProfileGuard>
      </Suspense>
    }
  ></Route>,
  <Route
    key="profile"
    path={ADDITION_PATH.PROFILE}
    element={
      <Suspense fallback={<div>Loading</div>}>
        <ProfileGuard>
          <ProfileView />
        </ProfileGuard>
      </Suspense>
    }
  ></Route>,
];
