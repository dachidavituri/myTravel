import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import AppRoutes from "./routes";
import { useSetAtom } from "jotai";
import { loginAtom } from "./store";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Loading from "./components/loading";

const App = () => {
  const setUser = useSetAtom(loginAtom);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
      setisLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
