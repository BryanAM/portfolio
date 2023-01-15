import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Card } from '../../components/index';
import projects from '../../assets/data/projects';
import './projects.scss';

function Projects() {
  const [t] = useTranslation();

  return (
    <div className="max-content-width projects">
      <Stack flexDirection="column">
        <h1 className="posts-header">{t('projects.header')}</h1>
        <Stack className="projects-cards-wrapper" flexDirection="row" flexWrap="wrap" gap={16}>
          {projects && projects.map((project) => (
            <Card key={project.key} data={project} />
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

export default Projects;
