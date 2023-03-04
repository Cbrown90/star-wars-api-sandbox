import React, { useState, useEffect, useCallback } from "react";

import FilmsList from "../Films/FilmsList";
import "../../App.css";

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

const apiAddress = "https://swapi.dev/api/films/"

  const fetchFilmsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiAddress);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const transformedFilms = data.results.map((filmData) => {
        return {
          id: filmData.episode_id,
          title: filmData.title,
          openingText: filmData.opening_crawl,
          releaseDate: filmData.release_date
        
        };
      });
      setFilms(transformedFilms);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  

  useEffect(() =>{
    fetchFilmsHandler();
  }, [fetchFilmsHandler]);

let content = <p>No Films found</p>;
if (films.length > 0) content = <FilmsList films={films} />;
if (error) content = <p>{error}</p>;
if (isLoading) content = <p>Loading...</p>;
  return (
    <React.Fragment>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default FilmsPage;