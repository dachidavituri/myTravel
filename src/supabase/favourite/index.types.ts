export interface addFavoriteProps {
  userId: string | null;
  tourId: number | null;
}

interface Tour {
  id: number;
  img: string;
  city: string;
  type: string;
  hotel: string;
  price: number;
  airport: string;
  country: string;
  duration: number;
  location: string;
  tourName: string;
  created_at: string;
  description: string;
}

export interface TourData {
  tours: Tour;
}
