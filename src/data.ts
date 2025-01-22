import Nature from "!/52849-473336269_tiny.mp4";
import France from "!/203403-921381908_tiny.mp4";
import Prague from "!/56076-478688149_tiny.mp4";
import { Question } from "./pages/personality/components/index.types";

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
  city: "",
};

export const addFeedbackDefaultValues = { comment: "", stars: 0 };

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

export const videos = [Nature, France, Prague];

export const items = [
  {
    key: "1",
    label: "Favourite Tour",
  },
  {
    key: "2",
    label: "Booked Tour",
  },
];

export const questions: Question[] = [
  {
    questionText: "What is your ideal vacation activity?",
    answerOptions: [
      { answerText: "Exploring ancient ruins", travelType: "Historical" },
      { answerText: "Relaxing at a luxury resort", travelType: "Luxury" },
      {
        answerText: "Hiking through national parks",
        travelType: "Adventurous",
      },
    ],
  },
  {
    questionText: "What type of environment do you prefer for your vacation?",
    answerOptions: [
      {
        answerText: "A bustling city with rich culture",
        travelType: "Cultural",
      },
      {
        answerText: "A historic city with ancient landmarks",
        travelType: "Historical",
      },
      {
        answerText: "A vibrant city with a focus on technology and innovation",
        travelType: "Educational",
      },
    ],
  },
  {
    questionText: "What type of accommodation do you prefer?",
    answerOptions: [
      {
        answerText: "Boutique hotels with local charm",
        travelType: "Cultural",
      },
      { answerText: "All-inclusive luxury resorts", travelType: "Luxury" },
      {
        answerText: "Eco-friendly lodges in remote areas",
        travelType: "Adventurous",
      },
    ],
  },
  {
    questionText: "How do you like to spend your evenings while traveling?",
    answerOptions: [
      { answerText: "Attending cultural performances", travelType: "Cultural" },
      { answerText: "Dining at gourmet restaurants", travelType: "Luxury" },
      {
        answerText: "Exploring local nightlife and music scenes",
        travelType: "Adventurous",
      },
    ],
  },
  {
    questionText: "What is your preferred mode of transportation?",
    answerOptions: [
      {
        answerText: "Guided tours with historical insights",
        travelType: "Historical",
      },
      {
        answerText: "Private jets and chauffeur-driven cars",
        travelType: "Luxury",
      },
      {
        answerText: "Backpacking and public transit",
        travelType: "Adventurous",
      },
    ],
  },
];
