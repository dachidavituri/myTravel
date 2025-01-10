export interface ProfileForm {
  id: string;
  username: string;
  name_ka: string;
  name_en: string;
  surname_ka: string;
  surname_en: string;
  phone: string;
  avatar_url: string;
}
export interface Profile {
  avatar_url: string | null;
  full_name: string | null;
  id: string;
  name_en: string | null;
  name_ka: string | null;
  phone: string | null;
  points?: number | null;
  quiz_completed?: boolean | null;
  surname_en: string | null;
  surname_ka: string | null;
  updated_at: string | null;
  username: string | null;
}
export interface FillProfilePoints {
  points: number;
  userId: string;
  quizCompleted: boolean;
}
