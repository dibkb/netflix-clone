import useMovies from "@/hooks/useMovieList";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { data } = useMovies();
  const moviesList = data?.map((movie: any) => (
    <MovieCard key={movie.id} {...movie} />
  ));
  return (
    <div className="px-4 md:px-16 py-4">
      <p className="text-sm md:text-xl lg:text-2xl font-medium py-4">
        Trending Now
      </p>
      <div className="grid grid-cols-4 gap-2">{moviesList}</div>
    </div>
  );
};

export default MovieList;
