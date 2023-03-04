import React from 'react';
import { Link } from 'react-router-dom';

import Planets from './Planets';
import classes from './PlanetsList.module.css';

const PlanetsList = (props) => {
  
  return (
    <ul className={classes['planets-list']}>
      {props.Planets.map((planet) => (
        <Link to={`/planets/${planet.id}`}>
        <Planets
          key={planet.id}
          planet={planet.name}
          terrain={planet.terrain}
          climate={planet.climate}
        />
        </Link>
      ))}
    </ul>
  );
};

export default PlanetsList;
