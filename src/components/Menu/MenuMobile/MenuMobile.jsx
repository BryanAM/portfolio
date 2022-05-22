import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { theme, setTheme } = useTheme();

  const closeOpenMenus = (e) => {
    if (menuOpen && !mobileMenuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);

    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
    };
  }, [menuOpen]);

  return (
    <>
      <button className={`floating-action-button menu-mobile-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(true)} type="button">
        <MenuIcon />
      </button>
      {/* Ref to close on outside click */}
      <div ref={mobileMenuRef} className={`menu-mobile-wrapper ${menuOpen ? 'open' : ''}`}>
        <Stack className="menu-mobile-stack" spacing={8} verticalSpacing={2} flexDirection="column">
          <NavLink to="/posts" className="font-size-400">{t('menu.posts')}</NavLink>
          <NavLink to="/projects" className="font-size-400">{t('menu.projects')}</NavLink>
          <NavLink to="/code" className="font-size-400">{t('menu.code')}</NavLink>
          <NavLink to="/resume" className="font-size-400">{t('menu.resume')}</NavLink>
          <Stack>
            <button type="button" className="icon-button" onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}>
              {theme === 'theme' ? <SunIcon className="menu-mobile-theme-button" /> : <MoonIcon />}
            </button>
            <button className="text-button" type="button" onClick={() => i18next.changeLanguage('en')}>EN</button>
            <button className="text-button" type="button" onClick={() => i18next.changeLanguage('jp')}>JP</button>
          </Stack>
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
  );
}

MenuMobile.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default MenuMobile;
