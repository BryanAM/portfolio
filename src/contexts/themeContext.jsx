import React, {
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('theme');
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
