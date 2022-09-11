import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from './contexts/themeContext';
import Landing from './views/Landing/Landing';
import { Menu, SocialPole } from './components/index';
import UnderConstruction from './views/UnderConstruction/UnderConstruction';

function App() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const appContainerVariants = {
    open: {
      filter: 'blur(6px)',
      transition: {
        type: 'tween',
        duration: 2,
      },
    },
    close: {
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  };
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <motion.div variants={appContainerVariants} animate={menuOpen ? 'open' : 'close'} className={`app-blur-container ${menuOpen}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/*" element={<UnderConstruction />} />
          </Routes>
        </motion.div>
      </BrowserRouter>
      <SocialPole />
    </div>
  );
}

export default App;
