import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import AppRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
