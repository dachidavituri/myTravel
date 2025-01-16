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
const DetailTourView = lazy(() => import("@/pages/single-tour/views"));
const PersonalityView = lazy(() => import("@/pages/personality/views"));

export const MAIN_ROUTES = [
  <Route
    key={MAIN_PATH.HOME}
    path={MAIN_PATH.HOME}
    element={
      <Suspense fallback={<Loading />}>
        <HomeView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={MAIN_PATH.ABOUT}
    path={MAIN_PATH.ABOUT}
    element={
      <Suspense fallback={<Loading />}>
        <AboutView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={MAIN_PATH.TOURS}
    path={MAIN_PATH.TOURS}
    element={<ToursView />}
  ></Route>,
  <Route
    key={ADDITION_PATH.SETTINGS}
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
    key={ADDITION_PATH.PROFILE}
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
    key={ADDITION_PATH.PERSONALITY}
    path={ADDITION_PATH.PERSONALITY}
    element={
      <Suspense fallback={<Loading />}>
        <ProfileGuard>
          <PersonalityView />
        </ProfileGuard>
      </Suspense>
    }
  ></Route>,
  <Route
    key={ADDITION_PATH.GAME}
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
    key={ADDITION_PATH.GALLERY}
    path={ADDITION_PATH.GALLERY}
    element={
      <Suspense fallback={<Loading />}>
        <GalleryView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={ADDITION_PATH.WEATHER}
    path={ADDITION_PATH.WEATHER}
    element={
      <Suspense fallback={<Loading />}>
        <WeatherView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={ADDITION_PATH.DETAIL}
    path={MAIN_PATH.TOURS + "/:id"}
    element={
      <Suspense fallback={<Loading />}>
        <DetailTourView />
      </Suspense>
    }
  ></Route>,
];
