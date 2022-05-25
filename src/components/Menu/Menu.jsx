import React, { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import { ReactComponent as MoonIcon } from '../../assets/pictograms/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/pictograms/sun.svg';
import { useTheme } from '../../contexts/themeContext';
import MobileMenu from './MenuMobile/MenuMobile';
import './menu.scss';

function Menu() {
  const [t, i18next] = useTranslation();
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

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
      <NavLink to="/"><MeIcon className="menu-icon" /></NavLink>
      {mobile ? (
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        <Stack spacing={6}>
          <NavLink className="menu-nav-link" to="/posts">{t('menu.posts')}</NavLink>
          <NavLink className="menu-nav-link" to="/projects">{t('menu.projects')}</NavLink>
          <NavLink className="menu-nav-link" to="/code">{t('menu.code')}</NavLink>
          <NavLink className="menu-nav-link" to="/resume">{t('menu.resume')}</NavLink>
          <button type="button" className="icon-button" onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}>
            {theme === 'theme' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="text-button" type="button" onClick={() => i18next.changeLanguage('en')}>EN</button>
          <button className="text-button" type="button" onClick={() => i18next.changeLanguage('jp')}>JP</button>
        </Stack>
      )}
    </nav>
  );
}

export default Menu;
