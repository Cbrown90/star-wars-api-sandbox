import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import Film from "../Films/Film";
import "../../App.css";

function FilmPage(props) {
  const { filmID } = useParams();

  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const apiAddress = "https://swapi.dev/api/films/" + filmID;

  const fetchFilmsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiAddress);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(typeof data.characters);
      const filmData = {
        title: data.title,
        characters: data.characters,
        planets: data.planets,
        director: data.director,
      };
      console.log(data);
      setFilm(filmData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFilmsHandler();
  }, [fetchFilmsHandler]);

  let content = <p>No Films found</p>;
  if (film !== undefined) content = <Film film={film} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;
  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default FilmPage;
