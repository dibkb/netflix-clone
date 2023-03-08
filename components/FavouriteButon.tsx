import { useCurrentUser } from "@/hooks/useCurrentUser";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import useFavourites from "./useFavourites";
interface FavoriteButtonProps {
  movieId: string;
}
const FavouriteButon: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;
    response = await axios.post("/api/favourite", { movieId });
  }, [movieId]);
  return (
    <>
      <BookmarkIcon
        onClick={toggleFavorites}
        className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-gray-200"
      />
    </>
  );
};

export default FavouriteButon;
