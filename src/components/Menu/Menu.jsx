import React, { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import { ReactComponent as MoonIcon } from '../../assets/pictograms/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/pictograms/sun.svg';
import { useTheme } from '../../contexts/themeContext';
import MobileMenu from './MenuMobile/MenuMobile';
import './menu.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Menu({ menuOpen, setMenuOpen }) {
  const [t] = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    const windowSize = window.innerWidth;
    setMobile(windowSize <= 768);
    if (windowSize > 768) {
      setMenuOpen(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    // prevent scrolling on body if mobileMenu open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const MotionNavLink = motion(NavLink, { forwardMotionProps: true });

  const container = {
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.4 },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.nav variants={container} initial="initial" animate="show" className={`menu ${menuOpen ? 'open' : ''}`}>
      <NavLink to="/"><MeIcon className="menu-icon" /></NavLink>
      {mobile ? (
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        <Stack className="menu-stack" alignItems="center">
          <MotionNavLink variants={child} className="menu-nav-link" to="/">{t('menu.home')}</MotionNavLink>
          <MotionNavLink variants={child} className="menu-nav-link" to="/posts">{t('menu.posts')}</MotionNavLink>
          <MotionNavLink variants={child} className="menu-nav-link" to="/projects">{t('menu.projects')}</MotionNavLink>
          <MotionNavLink variants={child} className="menu-nav-link" to="/resume">{t('menu.resume')}</MotionNavLink>
          <motion.button variants={child} type="button" className="icon-button" onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}>
            {theme === 'theme' ? <SunIcon /> : <MoonIcon />}
          </motion.button>
          <motion.span variants={child}><LanguageSwitcher /></motion.span>
        </Stack>
      )}
    </motion.nav>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
