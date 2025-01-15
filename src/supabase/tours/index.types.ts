export interface AddTourTypes {
  tourName: string;
  img: File | null;
  country: string;
  city: string;
  description: string;
  location: string;
  price: number;
  duration: number;
  type: string;
  airport: string;
  hotel: string;
}
export interface ToursResponse {
  id: number;
  created_at: string;
  tourName: string | null;
  country: string | null;
  description: string | null;
  location: string | null;
  price: number | null;
  duration: number | null;
  type: string | null;
  airport: string | null;
  hotel: string | null;
  img: string | null;
  city: string | null;
}
