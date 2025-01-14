/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router";
import { ADDITION_PATH, MAIN_PATH } from "../index.enum";
import { lazy, Suspense } from "react";
import ProfileGuard from "@/components/guard/profile-guard";
import Loading from "@/components/loading";
const SettingsView = lazy(() => import("@/pages/settings/views"));
const ProfileView = lazy(() => import("@/pages/profile/views"));
const AboutView = lazy(() => import("@/pages/about/views"));
const GameView = lazy(() => import("@/pages/game/views"));
const GalleryView = lazy(() => import("@/pages/gallery/views"));
const HomeView = lazy(() => import("@/pages/home/pages"));
const WeatherView = lazy(() => import("@/pages/weather/views"));
const ToursView = lazy(() => import("@/pages/tours/views"));

export const MAIN_ROUTES = [
  <Route
    key="home"
    path={MAIN_PATH.HOME}
    element={
      <Suspense fallback={<Loading />}>
        <HomeView />
      </Suspense>
    }
  ></Route>,
  <Route
    key="about"
    path={MAIN_PATH.ABOUT}
    element={
      <Suspense fallback={<Loading />}>
        <AboutView />
      </Suspense>
    }
  ></Route>,
  <Route key="tours" path={MAIN_PATH.TOURS} element={<ToursView />}></Route>,
  <Route
    key="settings"
    path={ADDITION_PATH.SETTINGS}
    element={
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
        <ProfileGuard>
          <ProfileView />
        </ProfileGuard>
      </Suspense>
    }
  ></Route>,
  <Route
    key="game"
    path={ADDITION_PATH.GAME}
    element={
      <Suspense fallback={<Loading />}>
        <ProfileGuard>
          <GameView />
        </ProfileGuard>
      </Suspense>
    }
  ></Route>,
  <Route
    key="gallery"
    path={ADDITION_PATH.GALLERY}
    element={
      <Suspense fallback={<Loading />}>
        <GalleryView />
      </Suspense>
    }
  ></Route>,
  <Route
    key="weather"
    path={ADDITION_PATH.WEATHER}
    element={
      <Suspense fallback={<Loading />}>
        <WeatherView />
      </Suspense>
    }
  ></Route>,
];
