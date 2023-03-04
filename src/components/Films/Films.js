import React from 'react';

import classes from './Film.module.css';

const Films = (props) => {
  return (
    <li className={classes.film}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Films;
