import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../state/themeProvider';

const Header = () => {
  const { switchTheme } = useThemeMode('dark-mode');

  const updateTheme = ({ target }) => {
    if(target.checked) switchTheme('light-mode');
    else switchTheme('dark-mode');
  };

  return (
    <>
      <div className={styles.header}>
        <h1>Welcome!</h1>
      </div>
      <div>
        <Link to={'/'}><button>Home</button></Link>
      </div>
      <div>
        <input type="checkbox" onChange={updateTheme} />
      </div>
    </>
  );
};

export default Header;
