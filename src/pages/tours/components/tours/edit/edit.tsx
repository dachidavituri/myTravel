import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputNumber, Select } from "antd";
import { TourSchemaWithoutImg } from "@/schema";
import Error from "@/components/error-message";
import { EditTourFormProps } from "../../index.types";

const { TextArea } = Input;
const { Option } = Select;

const EditTourForm: React.FC<EditTourFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TourSchemaWithoutImg),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <label htmlFor="tourName">Tour Name</label>
          <Controller
            name="tourName"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.tourName && <Error message={errors.tourName.message} />}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.country && <Error message={errors.country.message} />}
        </div>
        <div>
          <label htmlFor="country">City</label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.city && <Error message={errors.city.message} />}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextArea {...field} className="w-full" />}
          />
          {errors.description && <Error message={errors.description.message} />}
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Controller
            name="location"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.location && <Error message={errors.location.message} />}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <InputNumber {...field} className="w-full" min={1} />
            )}
          />
          {errors.price && <Error message={errors.price.message} />}
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <InputNumber {...field} className="w-full" min={1} />
            )}
          />
          {errors.duration && <Error message={errors.duration.message} />}
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select {...field} className="w-full">
                {TourSchemaWithoutImg.shape.type.options.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            )}
          />
          {errors.type && <Error message={errors.type.message} />}
        </div>
        <div>
          <label htmlFor="airport">Airport</label>
          <Controller
            name="airport"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.airport && <Error message={errors.airport.message} />}
        </div>
        <div>
          <label htmlFor="hotel">Hotel</label>
          <Controller
            name="hotel"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.hotel && <Error message={errors.hotel.message} />}
        </div>
        <div className="mt-4 flex justify-end">
          <button type="submit" className="bg-blue-600 px-4 py-2 text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTourForm;
