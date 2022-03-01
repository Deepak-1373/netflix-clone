import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
        backgroundPosition: "center top",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="banner-contents">
        {/* title */}
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* div > 2 buttons */}
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
};
