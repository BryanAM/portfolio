import React, { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import { ReactComponent as MenuIcon } from '../../assets/pictograms/menu.svg';
import { ReactComponent as CloseCross } from '../../assets/pictograms/close-cross.svg';
import './menu.scss';

function Menu() {
  const [t] = useTranslation();
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
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
        <>
          <button className={`floating-action-button menu-mobile-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(true)} type="button">
            <MenuIcon />
          </button>
          <div className={`menu-mobile-wrapper ${menuOpen ? 'open' : ''}`}>
            <Stack className="menu-mobile-stack" spacing={6} flexDirection="column">
              <NavLink to="/posts" className="font-size-400">{t('menu.posts')}</NavLink>
              <NavLink to="/projects" className="font-size-400">{t('menu.projects')}</NavLink>
              <NavLink to="/code" className="font-size-400">{t('menu.code')}</NavLink>
              <NavLink to="/resume" className="font-size-400">{t('menu.resume')}</NavLink>
            </Stack>
          </div>
          <button className={`floating-action-button menu-mobile-button-close ${menuOpen ? 'open' : ''}`} type="button" onClick={() => setMenuOpen(false)}>
            <CloseCross />
          </button>
        </>
      ) : (
        <Stack spacing={6}>
          <NavLink to="/posts">{t('menu.posts')}</NavLink>
          <NavLink to="/projects">{t('menu.projects')}</NavLink>
          <NavLink to="/code">{t('menu.code')}</NavLink>
          <NavLink to="/resume">{t('menu.resume')}</NavLink>
        </Stack>
      )}
    </nav>
  );
}

export default Menu;
