import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";

const baseImageURL = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // fetching the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      {title}
      <div className="row-posters">
        {movies.map(({ poster_path, name }) => (
          <img src={`${baseImageURL}${poster_path}`} alt={name} />
        ))}
      </div>
    </div>
  );
};
