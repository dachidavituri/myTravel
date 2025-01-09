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
  id: string;
  updated_at: string | null;
  username: string;
  name_ka: string;
  avatar_url: string;
  name_en: string;
  surname_ka: string;
  surname_en: string;
  phone: string;
  full_name: string | null;
}
