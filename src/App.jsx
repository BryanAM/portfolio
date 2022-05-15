import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useTheme } from './contexts/themeContext';
import Landing from './views/Landing/Landing';
import { Menu } from './components/index';

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
      <BrowserRouter>
        <Menu />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
