import { useTranslation } from "react-i18next";
const App = () => {
  const { t } = useTranslation();
  return <h1 className="text-red-700">{t("header.logo")}</h1>;
};

export default App;
