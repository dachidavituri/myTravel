import { getAllProfile, getProfile } from "@/supabase/account";
import { Profile } from "@/supabase/account/index.types";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { PROFILE_QUERY_KEYS } from "./enum";

export const useGetProfile = ({
  id,
  queryOptions,
}: {
  id: string | number;
  queryOptions?: Omit<UseQueryOptions<Profile[], Error>, "queryKey">;
}): UseQueryResult<Profile[], Error> => {
  return useQuery<Profile[], Error>({
    queryKey: [PROFILE_QUERY_KEYS.INFO, id],
    queryFn: () => getProfile(id as string),
    ...queryOptions,
  });
};

export const useGetAllProfile = (): UseQueryResult<Profile[], Error> => {
  return useQuery<Profile[], Error>({
    queryKey: [PROFILE_QUERY_KEYS.ALL_PROFILE],
    queryFn: getAllProfile,
  });
};
