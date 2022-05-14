import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import { ReactComponent as MenuIcon } from '../../assets/pictograms/menu.svg';
import { ReactComponent as CloseCross } from '../../assets/pictograms/close-cross.svg';
import { ReactComponent as MoonIcon } from '../../assets/pictograms/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/pictograms/sun.svg';
import { useTheme } from '../../contexts/themeContext';
import './menu.scss';

function Menu() {
  const [t] = useTranslation();
  const mobileMenuRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    const windowSize = window.innerWidth;
    setMobile(windowSize <= 768);
    if (windowSize > 768) {
      setMenuOpen(false);
    }
  };

  const closeOpenMenus = (e) => {
    if (menuOpen && !mobileMenuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', closeOpenMenus);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', closeOpenMenus);
    };
  }, [menuOpen]);

  return (
    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
      <NavLink to="/"><MeIcon className="menu-icon" /></NavLink>
      {mobile ? (
        <>
          <button className={`floating-action-button menu-mobile-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(true)} type="button">
            <MenuIcon />
          </button>
          {/* Ref to close on outside click */}
          <div ref={mobileMenuRef} className={`menu-mobile-wrapper ${menuOpen ? 'open' : ''}`}>
            <Stack className="menu-mobile-stack" spacing={6} flexDirection="column">
              <NavLink to="/posts" className="font-size-400">{t('menu.posts')}</NavLink>
              <NavLink to="/projects" className="font-size-400">{t('menu.projects')}</NavLink>
              <NavLink to="/code" className="font-size-400">{t('menu.code')}</NavLink>
              <NavLink to="/resume" className="font-size-400">{t('menu.resume')}</NavLink>
              <button type="button" className="icon-button" onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}>
                {theme === 'theme' ? <SunIcon className="menu-mobile-theme-button" /> : <MoonIcon />}
              </button>
            </Stack>
          </div>
          <button
            className={`floating-action-button menu-mobile-button-close ${menuOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setMenuOpen(false)}
          >
            <CloseCross />
          </button>
        </>
      ) : (
        <Stack spacing={6}>
          <NavLink to="/posts">{t('menu.posts')}</NavLink>
          <NavLink to="/projects">{t('menu.projects')}</NavLink>
          <NavLink to="/code">{t('menu.code')}</NavLink>
          <NavLink to="/resume">{t('menu.resume')}</NavLink>
          <button type="button" className="icon-button" onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}>
            {theme === 'theme' ? <SunIcon /> : <MoonIcon />}
          </button>
        </Stack>
      )}
    </nav>
  );
}

export default Menu;
