import { servicesData } from "@/data";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-3">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800 dark:text-white">
          {t("about.services.title")}
        </h2>
        <p className="mb-12 text-gray-600 dark:text-white">
          {t("about.services.subtitle")}
        </p>
        <Carousel className="m-auto max-w-[85%]">
          <CarouselContent>
            {servicesData.map((service, index) => (
              <CarouselItem key={index}>
                <div
                  key={service.key}
                  className="h-full rounded-lg bg-gray-200 p-6 shadow-2xl dark:bg-gray-300"
                >
                  <h3 className="mb-2 text-xl font-medium text-gray-800">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600">{t(service.descriptionKey)}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
