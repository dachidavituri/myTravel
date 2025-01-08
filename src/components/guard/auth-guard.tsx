import useCurrentLang from "@/i18n/current-lang";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router";

const AuthRegisterGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(loginAtom);
  const currntLang = useCurrentLang();
  if (user) {
    return <Navigate to={`/${currntLang}/${MAIN_PATH.HOME}`} />;
  }
  return children || <Outlet />;
};
export default AuthRegisterGuard;
