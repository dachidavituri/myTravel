import { useUploadImageToGallery } from "@/react-query/mutation/gallery";
import { galleryFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "antd";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Error from "@/components/error-message";
import { galleryDefaultValue } from "@/data";
import { useQueryClient } from "react-query";
import { QUERY_GALLERY_IMAGES } from "@/react-query/query/gallery/enum";
import { useTranslation } from "react-i18next";
export const Form: React.FC = () => {
  const { t } = useTranslation();

  interface ImageUpload {
    image_url: File | null;
  }
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageUpload>({
    resolver: zodResolver(galleryFormSchema),
    defaultValues: galleryDefaultValue,
  });

  const { mutate: handleAddImage } = useUploadImageToGallery();

  const onSubmit: SubmitHandler<ImageUpload> = (data) => {
    handleAddImage(data.image_url, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_GALLERY_IMAGES.GALLERY_IMAGES);
      },
    });
  };

  return (
    <div className="m-auto mt-5 max-w-96">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-2 flex items-center justify-center gap-4"
      >
        <Controller
          control={control}
          name="image_url"
          render={({ field }) => (
            <Input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                field.onChange(file);
              }}
            />
          )}
        />
        <Button
          color="danger"
          variant="solid"
          htmlType="submit"
          className="font-semibold"
        >
          {t("gallery.upload")}
        </Button>
      </form>
      {errors.image_url && <Error message={errors.image_url.message} />}
    </div>
  );
};
export default Form;
