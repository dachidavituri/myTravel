import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { FormProps, FormValues } from "../../index.types";
import Error from "@/components/error-message";
import { bookSchema } from "@/schema";
import { useAddBook } from "@/react-query/mutation/book";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { useNavigate, useParams } from "react-router";
import { useQueryClient } from "react-query";
import { BOOK_QUERY_KEYS } from "@/react-query/query/book/enum";
import useCurrentLang from "@/i18n/hooks/current-lang";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import { useGetBookedTours } from "@/react-query/query/book";

const Form: React.FC<FormProps> = ({ isModalVisible, setIsModalVisible }) => {
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const currentLang = useCurrentLang();
  const [isBooked, setIsBooked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
  });

  const hideModal = () => {
    setIsModalVisible(false);
    reset();
  };
  const { data: bookedTours } = useGetBookedTours({
    userId: user?.user.id ?? null,
  });
  const { mutate: handleAddBook } = useAddBook();

  useEffect(() => {
    if (user?.user.id) {
      if (bookedTours) {
        const alreadyBooked = bookedTours.some(
          (tour) => tour.tours.id === Number(id),
        );
        setIsBooked(alreadyBooked);
      }
    }
  }, [user?.user.id, id, bookedTours]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const payload = {
      bookingDate: data.calendar ? data.calendar.toISOString() : null,
      userId: user?.user.id,
      tourId: Number(id),
    };
    handleAddBook(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          BOOK_QUERY_KEYS.BOOKED_TOURS,
          user?.user.id,
        ]);
        navigate(`/${currentLang}/${ADDITION_PATH.PROFILE}`);
      },
    });
  };

  return (
    <Modal
      title={t("detail.book")}
      open={isModalVisible}
      onCancel={hideModal}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="calendar"
            className="mb-2 block font-medium text-gray-700"
          >
            Select Date:
          </label>
          <Controller
            name="calendar"
            control={control}
            render={({ field }) => (
              <Input
                type="date"
                {...field}
                value={
                  field.value
                    ? new Date(field.value).toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) => field.onChange(new Date(e.target.value))}
              />
            )}
          />
          {errors.calendar && <Error message={errors.calendar.message} />}
        </div>

        <div>
          <label
            htmlFor="cardNumber"
            className="mb-2 block font-medium text-gray-700"
          >
            Card Number:
          </label>
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <Input type="text" {...field} maxLength={16} />
            )}
          />
          {errors.cardNumber && <Error message={errors.cardNumber.message} />}
        </div>

        <div>
          <label htmlFor="cvc" className="mb-2 block font-medium text-gray-700">
            CVC:
          </label>
          <Controller
            name="cvc"
            control={control}
            render={({ field }) => (
              <Input type="text" {...field} maxLength={3} />
            )}
          />
          {errors.cvc && <Error message={errors.cvc.message} />}
        </div>

        <div>
          <label
            htmlFor="expiryDate"
            className="mb-2 block font-medium text-gray-700"
          >
            Expiry Date:
          </label>
          <Controller
            name="expiryDate"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
          {errors.expiryDate && <Error message={errors.expiryDate.message} />}
        </div>

        <Button
          htmlType="submit"
          variant="solid"
          color="danger"
          className="mt-4 font-semibold"
          disabled={isBooked}
        >
          {isBooked ? t("detail.alreadyBooked") : t("detail.pay")}
        </Button>
      </form>
    </Modal>
  );
};

export default Form;
