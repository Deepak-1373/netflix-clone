import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";

const baseImageURL = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl }) => {
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
      <h3>{title}</h3>
      <div className="row-posters">
        {movies.map(({ poster_path, name, id }) => (
          <img
            key={id}
            className="row-poster-image"
            src={`${baseImageURL}${poster_path}`}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};
