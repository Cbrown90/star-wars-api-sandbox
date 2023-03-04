import React, { useState, useEffect, useCallback } from "react";

import CharactersList from "../Characters/CharactersList";
import "../../App.css";

function CharactersPage() {
  const [Characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();



  const fetchCharactersHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/people/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const transformedCharacters = data.results.map((characterData) => {
        return {
          id: characterData.name,
          name: characterData.name,
          gender: characterData.gender,
          birth_year: characterData.birth_year,
        };
      });
      setCharacters(transformedCharacters);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  

  useEffect(() =>{
    fetchCharactersHandler();
  }, [fetchCharactersHandler]);

let content = <p>No Characters found</p>;
if (Characters.length > 0) content = <CharactersList characters={Characters} />;
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

export default CharactersPage;