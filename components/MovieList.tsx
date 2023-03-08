import useMovies from "@/hooks/useMovieList";
import React from "react";
import MovieCard from "./MovieCard";
import { MovieCardinterface } from "./MovieCard";
interface MovieList {
  data: MovieCardinterface[];
  title: string;
}
const MovieList: React.FC<MovieList> = ({ data, title }) => {
  const moviesList = data?.map((movie: any) => (
    <MovieCard key={movie.id} {...movie} />
  ));
  return (
    <div className="px-4 md:px-16 py-4">
      <p className="text-sm md:text-xl lg:text-2xl font-medium py-4">{title}</p>
      <div className="grid grid-cols-4 gap-2">{moviesList}</div>
    </div>
  );
};

export default MovieList;
