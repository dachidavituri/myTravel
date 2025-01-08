import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(loginAtom);
  const location = useLocation();
  if (!user) {
    return <Navigate state={{ from: location }} to={`/home`} />;
  }
  return children || <Outlet />;
};
export default ProfileGuard;
