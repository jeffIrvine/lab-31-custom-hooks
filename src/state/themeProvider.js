import React, { useState, useContext, createContext } from 'react';

export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark-mode');

  const switchTheme = (currentTheme) => {
    if(currentTheme === 'light-mode') setTheme('light-mode');
    else setTheme('dark-mode');
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return {
    theme,
    switchTheme
  };
};
