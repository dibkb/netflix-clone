import useSwr from "swr";
import fetcher from "@/libs/fetcher";
const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSwr(
    "/api/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};
export default useFavourites;
