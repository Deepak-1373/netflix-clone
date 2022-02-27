import React, { useEffect, useState } from "react";

export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // fetching the data from the API
  useEffect(() => {}, []);

  return <div>{title}</div>;
};
