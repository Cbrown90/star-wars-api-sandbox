import React from 'react';

import Characters from './Character';
import classes from './CharactersList.module.css';

const CharacterList = (props) => {
  return (
    <ul className={classes['characters-list']}>
      {props.characters.map((character) => (
        <Characters
          key={character.id}
          name={character.name}
          gender={character.gender}
          birth_year={character.birth_year}
        />
      ))}
    </ul>
  );
};

export default CharacterList;
