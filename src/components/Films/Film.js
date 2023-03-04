import React, { useCallback, useState, useEffect } from "react";

import classes from "./Film.module.css";

import characterclasses from "../Characters/CharactersList.module.css";
import Characters from '../Characters/Character';

import planetClasses from "../Planets/PlanetsList.module.css";
import Planets from '../Planets/Planet';

const GetChars = async (characters) => {
  const charList = await Promise.all(
    characters.map(async (chars) => {
        const response = await fetch(chars); 
      var characterData = await response.json() 
        return await{
          id: characterData.name,
          name: characterData.name,
          gender: characterData.gender,
          birth_year: characterData.birth_year
        };
      
    })
  );
  return charList;
};

const GetPlanets = async (planets) => {
  const planetsList = await Promise.all(
    planets.map(async (planets) => {
        const response = await fetch(planets); 
      var planetData = await response.json() 
        return await{
          id: planetData.name,
          name: planetData.name,
          terrain: planetData.terrain,
          climate: planetData.climate
        };
    })
  );
  return planetsList;
};

const Film = (props) => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  const fetchCharHandler = useCallback(async () => {
    if (props.film.characters !== undefined) {
      GetChars(props.film.characters).then((res) => {
          setCharacters(res);  
         
      });
  }},[]);

  const fetchPlanetsHandler = useCallback(async () => {
    if (props.film.planets !== undefined) {
      GetPlanets(props.film.planets).then((res) => {
          setPlanets(res);  
         
      });
  }},[]);


    useEffect(() => {
      fetchCharHandler();
    }, [fetchCharHandler]);

    useEffect(() => {
      fetchPlanetsHandler();
    }, [fetchPlanetsHandler]);
  
  return (
    <div>
      <h2>{props.film.title}</h2>     
      <p>{props.film.director}</p>
      <div className={characterclasses['character-chunk']}>
      <h3>Characters</h3>
      <ul className={characterclasses['characters-list']}>
      {characters.map((character) => (
        <Characters
          key={character.id}
          name={character.name}
          gender={character.gender}
          birth_year={character.birth_year}
        />
      ))}
      </ul>
      </div>
      <div className={planetClasses['planet-chunk']}>
      <h3>Planets</h3>
      <ul className={planetClasses['planets-list']}>
      {planets.map((planet) => (
        <Planets
          key={planet.id}
          planet={planet.name}
          terrain={planet.terrain}
          climate={planet.climate}        
        />
      ))}
      </ul>
      </div>
    </div>
  );
};

export default Film;
