import React from 'react';

import classes from './Planet.module.css';

const Planet = (props) => {
  return (
    <li className={classes.name}>
      <h2>{props.planet}</h2>
      <h3>{props.terrain}</h3>
      <p>{props.climate}</p>
    </li>
  );
};
export default Planet;
