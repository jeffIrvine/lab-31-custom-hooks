import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Character from '../../components/characters/Character';
import { useThemeMode } from '../../state/themeProvider';
import styles from '../app/App.css';

const CharacterList = ({ characters }) => {
  const { theme } = useThemeMode();

  const ListCard = characters.map((character) => (
    <Link key={character.id} to = {`/details/${character.id}`}>
      <li key={character.id}>
        <Character
          name={character.name}
          image={character.image}
          species={character.species}
        />
      </li>
    </Link>
  ));
  return (
    <div className={styles[theme]}>
      <ul 
        data-testid="characters">{ListCard}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired
    })
  ).isRequired,
};


export default CharacterList;
