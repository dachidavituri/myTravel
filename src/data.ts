import Nature from "!/52849-473336269_tiny.mp4";
import France from "!/203403-921381908_tiny.mp4";
import Prague from "!/56076-478688149_tiny.mp4";
export const registerDefaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const LoginDefaultValues = { email: "", password: "" };

export const resetDefaultValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const servicesData = [
  {
    key: "calculateWeather",
    titleKey: "about.services.calculateWeather.title",
    descriptionKey: "about.services.calculateWeather.description",
  },
  {
    key: "googleMapIntegration",
    titleKey: "about.services.googleMapIntegration.title",
    descriptionKey: "about.services.googleMapIntegration.description",
  },
  {
    key: "travelPersonalityQuiz",
    titleKey: "about.services.travelPersonalityQuiz.title",
    descriptionKey: "about.services.travelPersonalityQuiz.description",
  },
];
export const countryNames = [
  "quiz.France",
  "quiz.Germany",
  "quiz.Italy",
  "quiz.Spain",
  "quiz.Japan",
  "quiz.Brazil",
  "quiz.Canada",
  "quiz.Australia",
  "quiz.India",
  "quiz.South Africa",
  "quiz.Mexico",
  "quiz.Argentina",
  "quiz.South Korea",
  "quiz.Russia",
  "quiz.China",
  "quiz.United Kingdom",
  "quiz.United States",
  "quiz.Egypt",
  "quiz.Turkey",
  "quiz.Sweden",
  "quiz.Norway",
  "quiz.Finland",
  "quiz.Netherlands",
  "quiz.Belgium",
];

export const galleryDefaultValue = {
  image_url: null,
};
export const tourDefaultValue = {
  tourName: "",
  img: null,
  country: "",
  description: "",
  location: "",
  price: 0,
  duration: 0,
  type: "",
  airport: "",
  hotel: "",
};
export const videos = [Nature, France, Prague];
