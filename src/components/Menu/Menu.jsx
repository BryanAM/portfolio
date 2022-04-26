import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Stack from '../Stack/Stack';
import './menu.scss';

function Menu() {
  const [t] = useTranslation();
  return (
    <nav className="menu">
      <Stack spacing={6}>
        {/* TODO make home link SVG */}
        <NavLink to="/">{t('menu.home')}</NavLink>
        <NavLink to="/posts">{t('menu.posts')}</NavLink>
        <NavLink to="/projects">{t('menu.projects')}</NavLink>
        <NavLink to="/code">{t('menu.code')}</NavLink>
        <NavLink to="/resume">{t('menu.resume')}</NavLink>
      </Stack>
    </nav>
  );
}

export default Menu;
