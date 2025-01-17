import useCurrentLang from "@/i18n/hooks/current-lang";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(loginAtom);

  const currentLang = useCurrentLang();

  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        state={{ from: location }}
        to={`/${currentLang}/${MAIN_PATH.HOME}`}
      />
    );
  }
  return children || <Outlet />;
};
export default ProfileGuard;
