import React, { useState } from 'react';
import './App.scss';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useTheme } from './contexts/themeContext';
import Landing from './views/Landing/Landing';
import { Menu, Footer } from './components/index';
import UnderConstruction from './views/UnderConstruction/UnderConstruction';
import Resume from './views/Resume/Resume';

function App() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`App ${theme}`}>
      <HashRouter>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={`app-blur-container ${menuOpen}`} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<UnderConstruction />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
