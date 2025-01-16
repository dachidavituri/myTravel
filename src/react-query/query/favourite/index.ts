import { useQuery, UseQueryResult } from "react-query";
import { FAVORUITE_QUERY_KEYS } from "./enum";
import { checkFavorited, getFavouriteTours } from "@/supabase/favourite";
import { addFavoriteProps, TourData } from "@/supabase/favourite/index.types";

export const useCheckFavourite = ({ userId, tourId }: addFavoriteProps) => {
  return useQuery({
    queryKey: [FAVORUITE_QUERY_KEYS.CHECK_FAVOURITE],
    queryFn: () => checkFavorited({ userId, tourId }),
    cacheTime: 0,
    enabled: !!userId && !!tourId,
    select: (data) => {
      return !!data?.data;
    },
  });
};

export const useGetFavouriteTours = ({
  userId,
}: {
  userId: string | null;
}): UseQueryResult<TourData[] | undefined, Error> => {
  return useQuery<TourData[] | undefined, Error>({
    queryKey: [FAVORUITE_QUERY_KEYS.FAVOURITE_TOURS],
    queryFn: () => getFavouriteTours({ userId }),
  });
};
