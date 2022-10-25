import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../components/index';
import './projects.scss';

function Projects() {
  const [t] = useTranslation();
  return (
    <div className="max-content-width projects">
      <Stack flexDirection="column">
        <h1 className="posts-header">{t('projects.header')}</h1>
      </Stack>
    </div>
  );
}

export default Projects;
