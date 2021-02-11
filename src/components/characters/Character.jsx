import React from 'react';
import PropTypes from 'prop-types';
import { useThemeMode } from '../../state/themeProvider';
import styles from '../app/App.css';

const Character = ({ name, species, image }) => {
  const { theme } = useThemeMode();
  return (
    <figure className={styles[theme]}>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
        <span>{species}</span>
      </figcaption>
    </figure>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
