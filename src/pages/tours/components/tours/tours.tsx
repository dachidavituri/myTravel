import React, { useState } from "react";
import dayjs from "dayjs";
import { useGetTours } from "@/react-query/query/tours";
import { useDeleteTour, useEditTour } from "@/react-query/mutation/tours";
import { Modal } from "antd";

import { ToursResponse } from "@/supabase/tours/index.types";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import useCurrentLang from "@/i18n/current-lang";
import TourCard from "./card";
import EditTourForm from "./edit";
import { EditTour } from "../index.types";

dayjs.extend(relativeTime);

type SelectedTour = ToursResponse | null;

const Tours: React.FC = () => {
  const currentLang = useCurrentLang();
  dayjs.locale(currentLang);

  const { data } = useGetTours();
  const { mutate: deleteTour } = useDeleteTour();
  const { mutate: editTour } = useEditTour();

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
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
          onEdit={() => showModal(tour)}
          onDelete={deleteTourHandler}
        />
      ))}

      <Modal
        title="Edit Tour"
        open={isModalVisible}
        onCancel={hideModal}
        footer={null}
      >
        {selectedTour && (
          <EditTourForm
            defaultValues={selectedTour as EditTour}
            onSubmit={handleEditTour}
          />
        )}
      </Modal>
    </div>
  );
};

export default Tours;
