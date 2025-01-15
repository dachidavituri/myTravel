import React, { useState } from "react";
import dayjs from "dayjs";
import { useGetTours } from "@/react-query/query/tours";
import { useDeleteTour, useEditTour } from "@/react-query/mutation/tours";
import { Modal } from "antd";
import { useDebounce } from "@uidotdev/usehooks";
import { ToursResponse } from "@/supabase/tours/index.types";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import useCurrentLang from "@/i18n/current-lang";
import TourCard from "./card";
import EditTourForm from "./edit";
import { EditTour } from "../index.types";
import Search from "./search";
import { useTranslation } from "react-i18next";

dayjs.extend(relativeTime);

type SelectedTour = ToursResponse | null;

const Tours: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  dayjs.locale(currentLang);

  const { mutate: deleteTour } = useDeleteTour();
  const { mutate: editTour } = useEditTour();

  const [searched, setSearched] = useState<string>("");

  const debouncedSearched = useDebounce(searched, 1200);

  const { data: toursList } = useGetTours({
    search: debouncedSearched || "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTour, setSelectedTour] = useState<SelectedTour>(null);

  const showModal = (tour: ToursResponse) => {
    setSelectedTour(tour);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setSelectedTour(null);
  };

  const handleEditTour = (values: EditTour) => {
    if (selectedTour) {
      editTour({ payload: values, id: selectedTour.id });
    }
    hideModal();
  };

  const deleteTourHandler = (tourId: number, imgPath: string | null) => {
    deleteTour({
      tourId,
      imgPath,
    });
  };

  return (
    <div className="px-6 lg:px-36">
      <Search setSearched={setSearched} />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {toursList?.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            onEdit={() => showModal(tour)}
            onDelete={deleteTourHandler}
          />
        ))}

        <Modal
          title={t("tour.edit")}
          open={isModalVisible}
          onCancel={hideModal}
          footer={null}
          style={{ padding: "5px" }}
        >
          {selectedTour && (
            <EditTourForm
              defaultValues={selectedTour as EditTour}
              onSubmit={handleEditTour}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};
export default Tours;
