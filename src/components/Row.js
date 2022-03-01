import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";

const baseImageURL = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(({ poster_path, name, id, backdrop_path }) => (
          <img
            key={id}
            className={`row-poster-image ${isLargeRow && "row-poster-large"}`}
            src={`${baseImageURL}${isLargeRow ? poster_path : backdrop_path}`}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};
