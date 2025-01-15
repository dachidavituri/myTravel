import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, InputNumber, Select } from "antd";
import { TourSchemaWithoutImg } from "@/schema";
import Error from "@/components/error-message";
import { EditTourFormProps } from "../../index.types";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;
const { Option } = Select;

const EditTourForm: React.FC<EditTourFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const { t } = useTranslation();
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
          <label htmlFor="tourName">{t("tour.tourName")}</label>
          <Controller
            name="tourName"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.tourName && (
            <Error message={t(`${errors.tourName.message}`)} />
          )}
        </div>
        <div>
          <label htmlFor="country">{t("tour.country")}</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.country && <Error message={t(`${errors.country.message}`)} />}
        </div>
        <div>
          <label htmlFor="country">{t("tour.city")}</label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.city && <Error message={t(`${errors.city.message}`)} />}
        </div>
        <div>
          <label htmlFor="description">{t("tour.description")}</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextArea {...field} className="w-full" />}
          />
          {errors.description && (
            <Error message={t(`${errors.description.message}`)} />
          )}
        </div>
        <div>
          <label htmlFor="location">{t("tour.location")}</label>
          <Controller
            name="location"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.location && (
            <Error message={t(`${errors.location.message}`)} />
          )}
        </div>
        <div>
          <label htmlFor="price">{t("tour.price")}</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <InputNumber {...field} className="w-full" min={1} />
            )}
          />
          {errors.price && <Error message={t(`${errors.price.message}`)} />}
        </div>
        <div>
          <label htmlFor="duration">{t("tour.duration")}</label>
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <InputNumber {...field} className="w-full" min={1} />
            )}
          />
          {errors.duration && (
            <Error message={t(`${errors.duration.message}`)} />
          )}
        </div>
        <div>
          <label htmlFor="type">{t("tour.type")}</label>
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
          {errors.type && <Error message={t(`${errors.type.message}`)} />}
        </div>
        <div>
          <label htmlFor="airport">{t("tour.airport")}</label>
          <Controller
            name="airport"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.airport && <Error message={t(`${errors.airport.message}`)} />}
        </div>
        <div>
          <label htmlFor="hotel">{t("tour.hotel")}</label>
          <Controller
            name="hotel"
            control={control}
            render={({ field }) => <Input {...field} className="w-full" />}
          />
          {errors.hotel && <Error message={t(`${errors.hotel.message}`)} />}
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            htmlType="submit"
            className="rounded-lg"
            color="danger"
            variant="solid"
          >
            {t("tour.editBtn")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditTourForm;
