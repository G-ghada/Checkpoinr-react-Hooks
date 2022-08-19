import React, { useState } from "react";
import { data } from "../data";
import AddMovie from "./AddMovie";
import MovieItem from "./MovieItem";
import { Outlet } from "react-router-dom";

function MoviesList(props) {
  const [movies, setMovies] = useState(data);

  return (
    <div className="movie-list">
      <AddMovie movies={movies} setMovies={setMovies} />
      <Outlet />
      <div className="movies-container">
        {movies
          .filter((element) =>
            props.search && !props.rating
              ? element.title
                  .toLocaleLowerCase()
                  .includes(props.search.toLocaleLowerCase())
              : props.rating && !props.search
              ? element.rate === props.rating
              : !props.search && !props.rating
              ? element.title
                  .toLocaleLowerCase()
                  .includes(props.search.toLocaleLowerCase())
              : (props.search && props.rating) || (props.rating && props.search)
              ? element.title
                  .toLocaleLowerCase()
                  .includes(props.search.toLocaleLowerCase()) &&
                element.rate === props.rating
              : null
          )
          .map((movie, index) => {
            return (
              <MovieItem
                key={index}
                id = {movie.id}
                title={movie.title}
                cover={movie.cover}
                realisateur={movie.realisateur}
                rate={movie.rate}
                category={movie.category}
                release={movie.release}
              />
            );
          })}
        <Outlet />
      </div>
    </div>
  );
}

export default MoviesList;
