import React, { useEffect, useState } from "react";
import axios from "../api/axios";

export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // fetching the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies((prev) => [...prev, request.data.results]);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return <div>{title}</div>;
};
