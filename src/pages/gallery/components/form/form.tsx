import { useUploadImageToGallery } from "@/react-query/mutation/gallery";
import { galleryFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "antd";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Error from "@/components/error-message";
import { galleryDefaultValue } from "@/data";
export const Form: React.FC = () => {
  interface ImageUpload {
    image_url: File | null;
  }

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
    handleAddImage(data.image_url);
  };

  return (
    <div className="m-auto mt-5 max-w-96">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-4"
      >
        <Controller
          control={control}
          name="image_url"
          render={({ field }) => (
            <Input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                field.onChange(file);
              }}
            />
          )}
        />
        {errors.image_url && <Error message={errors.image_url.message} />}
        <Button color="danger" variant="solid" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Form;
