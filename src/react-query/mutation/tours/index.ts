import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { TOUR_MUTATION_KEYS } from "./enum";
import { addTour, deleteTour } from "@/supabase/tours";
import { AddTourTypes } from "@/supabase/tours/index.types";
import { TOURS_QUERY_KEYS } from "@/react-query/query/tours/enum";

export const useAddTours = (): UseMutationResult<
  void,
  Error,
  { payload: AddTourTypes },
  unknown
> => {
  return useMutation<void, Error, { payload: AddTourTypes }, unknown>({
    mutationKey: [TOUR_MUTATION_KEYS.ADD_TOUR],
    mutationFn: addTour,
  });
};

export const useDeleteTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TOUR_MUTATION_KEYS.DELETE_TOUR],
    mutationFn: ({
      tourId,
      imgPath,
    }: {
      tourId: number;
      imgPath?: string | null;
    }) => deleteTour(tourId, imgPath),
    onSuccess: () => {
      queryClient.invalidateQueries([TOURS_QUERY_KEYS.TOURS]);
    },
  });
};
