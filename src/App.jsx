import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from './contexts/themeContext';
import Landing from './views/Landing/Landing';
import { Menu } from './components/index';

function App() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const schema = document.querySelector('meta[name="theme-color"]');
    const style = getComputedStyle(document.body.querySelector('.App'));
    const headerColor = style.getPropertyValue('--app-bg-color');
    schema.setAttribute('content', headerColor);
  }, [theme]);

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
        <motion.div variants={appContainerVariants} animate={menuOpen ? 'open' : 'close'} className="app-container">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </motion.div>
      </BrowserRouter>
    </div>
  );
}

export default App;
