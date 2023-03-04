import React from 'react';
import { Link } from 'react-router-dom';

import Films from './Films';
import classes from './FilmsList.module.css';

const FilmList = (props) => {
  
  return (
    <ul className={classes['films-list']}>
      {props.films.map((film) => (
        <Link to={`/films/${film.id}`}>
        <Films
          key={film.id}
          title={film.title}
          releaseDate={film.releaseDate}
          openingText={film.openingText}
        />
        </Link>
      ))}
    </ul>
  );
};

export default FilmList;
