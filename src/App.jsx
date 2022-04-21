import React, { useEffect } from 'react';
import './App.scss';
import { useTheme } from './contexts/themeContext';
import Landing from './views/Landing/Landing';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const schema = document.querySelector('meta[name="theme-color"]');
    const style = getComputedStyle(document.body.querySelector('.App'));
    const headerColor = style.getPropertyValue('--app-bg-color');
    schema.setAttribute('content', headerColor);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div>
        <Landing />
      </div>
    </div>
  );
}

export default App;
