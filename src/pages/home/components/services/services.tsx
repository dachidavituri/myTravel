import Card from "./card";
import weatherImg from "!/reshot-icon-weather-EJPNZMV8U5.svg";
import EiffelImg from "!/reshot-icon-eiffel-tower-E6NB9JDQ5X.svg";
import { Link } from "react-router";
import useCurrentLang from "@/i18n/current-lang";
import { ADDITION_PATH, MAIN_PATH } from "@/routes/default-layout/index.enum";
const Services: React.FC = () => {
  const currentLang = useCurrentLang();
  return (
    <section className="mt-5 flex flex-col items-center gap-7 p-2 md:p-8 lg:flex-row">
      <div className="text-center lg:text-left">
        <h3 className="text-lg italic text-pink-600">What we serve</h3>
        <h2 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-white md:text-4xl">
          We offer our best services
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        <Link to={`/${currentLang}/${ADDITION_PATH.WEATHER}`}>
          <Card
            icon={<img src={weatherImg} className="w-10" />}
            title="Calculate Weather"
            description="Lorem ipsum dolor sit amet, adipisicing elit."
          />
        </Link>
        <Link to={`/${currentLang}/${MAIN_PATH.TOURS}`}>
          <Card
            icon={<img src={EiffelImg} className="w-10" />}
            title="Best Tour Offers"
            description="Lorem ipsum dolor sit amet, adipisicing elit."
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;
