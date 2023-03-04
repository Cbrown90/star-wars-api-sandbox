import React, { useState, useEffect, useCallback } from "react";

import FilmsList from "../Films/FilmsList";
import "../../App.css";

function PlanetsPage() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

const apiAddress = "https://swapi.dev/api/planets/"

  const fetchPlanetsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiAddress);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const transformedPlanets = data.results.map((planetData) => {
        return {
          id: planetData.name,
          planet: planetData.name,
          terrain: planetData.terrain,
          climate: planetData.climate
        
        };
      });
      setFilms(transformedPlanets);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  

  useEffect(() =>{
    fetchPlanetHandler();
  }, [fetchPlanetHandler]);

let content = <p>No Planet found</p>;
if (planets.length > 0) content = <PlanetsList planets={planets} />;
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

export default PlanetsPage;