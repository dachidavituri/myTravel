// import { useTranslation } from "react-i18next";
import Layout from "./components/layout/layout";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
const App = () => {
  // const { t } = useTranslation();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  );
};

export default App;
