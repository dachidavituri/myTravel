import React from "react";
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
import { useParams } from "react-router";

const Form: React.FC<FormProps> = ({ isModalVisible, setIsModalVisible }) => {
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  const { id } = useParams();

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
  const { mutate: handleAddBook } = useAddBook();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const payload = {
      bookingDate: data.calendar ? data.calendar.toISOString() : null,
      userId: user?.user.id,
      tourId: Number(id),
    };
    handleAddBook(payload, {
      onSuccess: () => {
        console.log("booked");
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
        >
          {t("detail.pay")}
        </Button>
      </form>
    </Modal>
  );
};

export default Form;
