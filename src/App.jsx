import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useTheme } from './contexts/themeContext';
import Landing from './views/Landing/Landing';
import { Menu, SocialPole } from './components/index';
import UnderConstruction from './views/UnderConstruction/UnderConstruction';

function App() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={`app-blur-container ${menuOpen}`} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
      <SocialPole />
    </div>
  );
}

export default App;
