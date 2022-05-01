import React, { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import './menu.scss';

function Menu() {
  const [t] = useTranslation();
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState('close');

  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="menu">
      <NavLink to="/"><MeIcon className="menu-icon" /></NavLink>
      {mobile ? (
        <>
          <button className="menu-mobile-button" onClick={() => setMenuOpen('open')} type="button">🏠</button>
          <div className={`menu-mobile-wrapper ${menuOpen}`}>
            <Stack className="menu-mobile-stack" spacing={6} flexDirection="column">
              <button className="menu-mobile-button" onClick={() => setMenuOpen('close')} type="button">🏠</button>
              <NavLink to="/posts" className="font-size-400">{t('menu.posts')}</NavLink>
              <NavLink to="/projects" className="font-size-400">{t('menu.projects')}</NavLink>
              <NavLink to="/code" className="font-size-400">{t('menu.code')}</NavLink>
              <NavLink to="/resume" className="font-size-400">{t('menu.resume')}</NavLink>
            </Stack>
          </div>
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
