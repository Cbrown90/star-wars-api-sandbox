import React from 'react';

import classes from './Character.module.css';

const Character = (props) => {
  return (
    <li className={classes.character}>
      <h2>{props.name}</h2>
      <h3>Gender : {props.gender}</h3>
      <p>Birth year: {props.birth_year}</p>
    </li>
  );
};

export default Character;
