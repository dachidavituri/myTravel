import Error from "@/components/error-message";
import { tourDefaultValue } from "@/data";
import { useAddTours } from "@/react-query/mutation/tours";
import { useGetProfile } from "@/react-query/query/account";
import { TOURS_QUERY_KEYS } from "@/react-query/query/tours/enum";
import { TourSchema } from "@/schema";
import { loginAtom } from "@/store";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, Button, Input, InputNumber, Select } from "antd";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { TourFormValues } from "../index.types";

const { TextArea } = Input;
const { Option } = Select;

const Form: React.FC = () => {
  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TourFormValues>({
    resolver: zodResolver(TourSchema),
    defaultValues: tourDefaultValue,
  });

  const { mutate: addTour } = useAddTours();

  const onSubmit: SubmitHandler<TourFormValues> = (formData) => {
    const payload = {
      ...formData,
    };
    addTour(
      { payload },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          queryClient.invalidateQueries(TOURS_QUERY_KEYS.TOURS);
          reset();
        },
      },
    );
  };

  return (
    <div className="container px-8 py-5">
      {data && data[0].admin && (
        <PlusCircleTwoTone
          className="cursor-pointer text-5xl hover:scale-105"
          twoToneColor="orange"
          onClick={openModal}
        />
      )}
      <Modal
        title="Add New Tour"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>,
        ]}
      >
        <form className="space-y-4">
          <div>
            <Controller
              name="tourName"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Tour Name" />
              )}
            />
            {errors.tourName && <Error message={errors.tourName.message} />}
          </div>
          <div>
            <Controller
              name="img"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Image URL"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    field.onChange(file);
                  }}
                />
              )}
            />
            {errors.img && <Error message={errors.img.message} />}
          </div>
          <div>
            <Controller
              name="country"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Country" />}
            />
            {errors.country && <Error message={errors.country.message} />}
          </div>
          <div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea {...field} placeholder="Description" rows={3} />
              )}
            />
            {errors.description && (
              <Error message={errors.description.message} />
            )}
          </div>
          <div>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Location" />
              )}
            />
            {errors.location && <Error message={errors.location.message} />}
          </div>
          <div>
            <label>Journey Price</label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <InputNumber
                  {...field}
                  placeholder="Price ($)"
                  min={1}
                  className="w-full"
                />
              )}
            />
            {errors.price && <Error message={errors.price.message} />}
          </div>
          <div>
            <label>Journey Duration</label>
            <Controller
              name="duration"
              control={control}
              render={({ field }) => (
                <InputNumber
                  {...field}
                  placeholder="Duration (e.g., 3 days)"
                  className="w-full"
                  min={1}
                />
              )}
            />

            {errors.duration && <Error message={errors.duration.message} />}
          </div>
          <div>
            <label>Journey Type</label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select Tour Type"
                  className="w-full"
                >
                  {TourSchema.shape.type.options.map((option, index) => (
                    <Option value={option} key={index}>
                      {option}
                    </Option>
                  ))}
                </Select>
              )}
            />
            {errors.type && <Error message={errors.type.message} />}
          </div>
          <div>
            <Controller
              name="airport"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Airport" />}
            />
            {errors.airport && <Error message={errors.airport.message} />}
          </div>
          <div>
            <Controller
              name="hotel"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Hotel" />}
            />
            {errors.hotel && <Error message={errors.hotel.message} />}
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Form;
