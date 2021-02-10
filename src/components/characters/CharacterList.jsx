import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../detail/Detail';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const ListCard = characters.map((character) => (
    <Link key={character.id} to = {`/details/${character.id}`}>
      <li key={character.id}>
        <Detail
          name={character.name}
          image={character.image}
          species={character.species}
        />
      </li>
    </Link>
  ));
  return <ul data-testid="results">{ListCard}</ul>;
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
