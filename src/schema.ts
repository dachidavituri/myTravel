import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(1, { message: "register.passwordRequired" })
  .min(8, { message: "register.passwordMinLength" })

  .regex(/[\W_]/, {
    message: "register.passwordSpecialChar",
  })
  .regex(/[A-Z]/, {
    message: "register.passwordUppercase",
  })
  .regex(/[0-9]/, { message: "register.passwordNumber" });

export const regiserFormSchema = z
  .object({
    email: z.string().email({ message: "register.emailInvalid" }),
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(1, { message: "register.confirmPasswordRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "register.passwordsDoNotMatch",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z.string().email({ message: "register.emailInvalid" }),
  password: passwordSchema,
});

export const searchWeatherSchema = z.object({
  country: z
    .string()
    .min(1, { message: "weather.countryRequired" })
    .min(3, { message: "weather.countryThree" }),
});

export const profileSchema = z.object({
  username: z.string().min(1, { message: "settings.username.requiredMessage" }),
  name_ka: z.string().min(1, "settings.nameKa.requiredMessage"),
  name_en: z.string().min(1, "settings.nameEn.requiredMessage"),
  surname_ka: z.string().min(1, "settings.surnameKa.requiredMessage"),
  surname_en: z.string().min(1, "settings.surnameEn.requiredMessage"),
  phone: z.string().min(1, "settings.phone.requiredMessage"),
});

export const newPasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "settings.current"),
    newPassword: passwordSchema,
    confirmPassword: z.string().min(1, "settings.confirmPassword"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "The two passwords do not match!",
  });

export const galleryFormSchema = z.object({
  image_url: z.instanceof(File).refine((file) => file instanceof File),
});

export const TourSchema = z.object({
  tourName: z.string().min(3, "Tour Name is minimum 3 symbool"),
  img: z.instanceof(File).refine((file) => file instanceof File),
  country: z.string().min(3, "Country is required min 3 symbol"),
  description: z.string().min(20, "Description is required"),
  location: z.string().min(3, "Location is min 3 symbol"),
  price: z.number().min(1, "Price must be greater than 0"),
  duration: z.number().min(1, "Duration is required"),
  type: z.enum(
    ["adventure", "cultural", "luxury", "Educational", "Historical"],
    {
      errorMap: () => ({ message: "Type Is Required" }),
    },
  ),
  airport: z.string().min(3, "Airport min 3 symbol"),
  hotel: z.string().min(3, "Hotel min 3 symbol"),
});

export const TourSchemaWithoutImg = TourSchema.omit({ img: true });
