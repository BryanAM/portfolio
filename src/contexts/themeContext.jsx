import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useLayoutEffect,
} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState();
  // Possibly a problem here????
  const themeContextValues = useMemo(() => ({ theme, setTheme }), [theme]);

  const getPreferedTheme = () => {
    const localTheme = localStorage.getItem('theme');
    const schema = document.querySelector('meta[name="theme-color"]');
    const userThemePreferences = window.matchMedia('(prefers-color-scheme: dark)');
    if (localTheme) {
      setTheme(localTheme);
      const style = getComputedStyle(document.body.querySelector('.App'));
      const headerColor = style.getPropertyValue('--app-bg-color');
      schema.setAttribute('content', headerColor);
      return;
    }
    const newTheme = userThemePreferences.matches ? 'theme-dark' : 'theme';
    localStorage.setItem('theme', newTheme);
    const style = getComputedStyle(document.body.querySelector('.App'));
    const headerColor = style.getPropertyValue('--app-bg-color');
    schema.setAttribute('content', headerColor);
  };

  useLayoutEffect(() => {
    getPreferedTheme();
  }, []);

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
