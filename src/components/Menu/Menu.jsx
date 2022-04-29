import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import './menu.scss';

function Menu() {
  const [t] = useTranslation();
  return (
    <nav className="menu">
      <NavLink to="/"><MeIcon className="menu-icon" /></NavLink>
      <Stack spacing={6}>
        <NavLink to="/posts">{t('menu.posts')}</NavLink>
        <NavLink to="/projects">{t('menu.projects')}</NavLink>
        <NavLink to="/code">{t('menu.code')}</NavLink>
        <NavLink to="/resume">{t('menu.resume')}</NavLink>
      </Stack>
    </nav>
  );
}

export default Menu;
