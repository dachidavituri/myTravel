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

export const tourSchema = z.object({
  tourName: z.string().min(3, "tour.tourNameErr"),
  img: z.instanceof(File).refine((file) => file instanceof File),
  country: z.string().min(3, "tour.countryErr"),
  city: z.string().min(3, "tour.cityErr"),
  description: z.string().min(20, "tour.descriptionErr"),
  location: z.string().min(3, "tour.locationErr"),
  price: z.number().min(1, "tour.priceErr"),
  duration: z.number().min(1, "tour.durationErr"),
  type: z.enum(
    ["Adventure", "Cultural", "Luxury", "Educational", "Historical"],
    {
      errorMap: () => ({ message: "tour.typeErr" }),
    },
  ),
  airport: z.string().min(3, "tour.airportErr"),
  hotel: z.string().min(3, "tour.hotelErr"),
});

export const tourSchemaWithoutImg = tourSchema.omit({ img: true });

export const feedbackShema = z.object({
  comment: z.string().min(15, { message: "detail.comment" }),
  stars: z
    .number()
    .min(0.5, { message: "detail.starsMin" })
    .max(5, { message: "detail.starsMax" }),
});

export const bookSchema = z.object({
  calendar: z
    .date({ required_error: "Please select a date" })
    .refine((date) => date > new Date(), {
      message: "Date must be greater than today",
    }),
  cardNumber: z
    .string()
    .length(16, "Card number must be 16 digits")
    .regex(/^\d{16}$/, "Card number must only contain digits"),
  cvc: z.string().regex(/^\d{3}$/, "CVC must be a 3-digit number"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format")
    .refine(
      (expiry) => {
        const [month, year] = expiry.split("/").map(Number);
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear() % 100;
        return (
          year > currentYear || (year === currentYear && month >= currentMonth)
        );
      },
      {
        message: "Expiry date must be greater than today",
      },
    ),
});
