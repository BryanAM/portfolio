/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  function getPreferedTheme() {
    const localTheme = localStorage.getItem('theme');
    const schema = document.querySelector('meta[name="theme-color"]');
    const userThemePreferences = window.matchMedia('(prefers-color-scheme: dark)');
    if (localTheme) {
      const headerColor = localTheme === 'theme' ? '#F8F7FD' : '#0a0a0a';
      schema.setAttribute('content', headerColor);
      return localTheme;
    }
    const newTheme = userThemePreferences.matches ? 'theme-dark' : 'theme';
    localStorage.setItem('theme', newTheme);
    const headerColor = newTheme === 'theme' ? '#F8F7FD' : '#0a0a0a';
    schema.setAttribute('content', headerColor);
    return newTheme;
  }

  const [theme, setThemeState] = useState(getPreferedTheme());

  const setTheme = (value) => {
    localStorage.setItem('theme', value);
    setThemeState(value);
    const schema = document.querySelector('meta[name="theme-color"]');
    const style = getComputedStyle(document.body.querySelector('.App'));
    const headerColor = style.getPropertyValue('--app-bg-color');
    schema.setAttribute('content', headerColor);
  };

  const themeContextValues = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export { ThemeProvider, useTheme };
