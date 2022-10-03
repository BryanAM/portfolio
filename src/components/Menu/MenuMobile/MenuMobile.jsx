import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Stack from '../../Stack/Stack';
import { ReactComponent as MenuIcon } from '../../../assets/pictograms/menu.svg';
import { ReactComponent as CloseCross } from '../../../assets/pictograms/close-cross.svg';
import { ReactComponent as MoonIcon } from '../../../assets/pictograms/moon.svg';
import { ReactComponent as SunIcon } from '../../../assets/pictograms/sun.svg';
import { useTheme } from '../../../contexts/themeContext';
import './menuMobile.scss';

function MenuMobile({ menuOpen, setMenuOpen }) {
  const [t, i18next] = useTranslation();
  const mobileMenuRef = useRef(null);
  const mobileStackRef = useRef(null);
  const { theme, setTheme } = useTheme();

  const closeOpenMenus = (e) => {
    if (menuOpen && !mobileMenuRef.current.contains(e.target)
    && !mobileStackRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);

    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
    };
  }, [menuOpen]);

  const menuVariants = {
    open: {
      transition: {
        type: 'spring',
      },
      width: 900,
      height: 900,
    },
    close: {
      transition: {
        type: 'tween',
        delay: 0.5,
        duration: 0.1,
        bounce: 0,
      },
      width: 48,
      height: 48,
    },
    hoverOpen: {
      scale: 1.1,
    },
    hoverClose: {
      scale: 1,
    },
  };

  const mobileCloseVariants = {
    open: {
      bottom: 32,
      scale: 1,
    },
    close: {
      bottom: -64,
      scale: 0,
    },
  };

  const navLinkVariants = {
    slideIn: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    slideOut: (i) => ({
      opacity: 0,
      x: -200,
      transition: {
        type: 'tween',
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
    hideMenu: {
      opacity: 0,
      x: -200,
    },
  };

  return (
    <>
      {/* Ref to close on outside click */}
      <motion.div
        whileHover={`${menuOpen ? 'hoverClose' : 'hoverOpen'}`}
        initial={false}
        animate={menuOpen ? 'open' : 'close'}
        variants={menuVariants}
        ref={mobileMenuRef}
        className={`menu-mobile-wrapper ${menuOpen ? 'open' : ''}`}
      >
        <button
          className={`menu-mobile-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          <MenuIcon />
        </button>
      </motion.div>
      <div ref={mobileStackRef}>
        <Stack className={`menu-mobile-stack ${menuOpen ? 'open' : ''}`} flexDirection="column">
          <motion.span custom={1} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants}><NavLink to="/" className="font-size-400">{t('menu.home')}</NavLink></motion.span>
          <motion.span custom={2} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants}><NavLink to="/posts" className="font-size-400">{t('menu.posts')}</NavLink></motion.span>
          <motion.span custom={3} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants}><NavLink to="/projects" className="font-size-400">{t('menu.projects')}</NavLink></motion.span>
          <motion.span custom={4} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants}><NavLink to="/code" className="font-size-400">{t('menu.code')}</NavLink></motion.span>
          <motion.span custom={5} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants}><NavLink to="/resume" className="font-size-400">{t('menu.resume')}</NavLink></motion.span>
          <Stack>
            <motion.button
              type="button"
              className="icon-button"
              custom={5}
              initial="hideMenu"
              animate={`${menuOpen ? 'slideIn' : 'slideOut'}`}
              variants={navLinkVariants}
              onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}
            >
              {theme === 'theme' ? <SunIcon className="menu-mobile-theme-button" /> : <MoonIcon />}
            </motion.button>
            <motion.button custom={6} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants} className="text-button" type="button" onClick={() => i18next.changeLanguage('en')}>EN</motion.button>
            <motion.button custom={7} initial="hideMenu" animate={menuOpen ? 'slideIn' : 'slideOut'} variants={navLinkVariants} className="text-button" type="button" onClick={() => i18next.changeLanguage('jp')}>JP</motion.button>
          </Stack>
        </Stack>
      </div>
      <motion.button
        variants={mobileCloseVariants}
        whileHover={{
          scale: 1.1,
        }}
        animate={menuOpen ? 'open' : 'close'}
        initial="close"
        className={`floating-action-button menu-mobile-button-close ${menuOpen ? 'open' : ''}`}
        type="button"
        onClick={() => setMenuOpen(false)}
      >
        <CloseCross />
      </motion.button>
    </>
  );
}

MenuMobile.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default MenuMobile;
