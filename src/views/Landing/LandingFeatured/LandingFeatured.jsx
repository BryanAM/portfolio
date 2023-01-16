import React from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../../assets/data/projects';
import { Card, Stack } from '../../../components/index';
import './landingFeatured.scss';

function LandingFeatured() {
  const [t] = useTranslation('', { keyPrefix: 'landing.landingFeatured' });
  return (
    <section className="landing-featured">
      <Stack className="landing-featured-containter max-content-width" flexDirection="column">
        <Stack flexDirection="column">
          <h2 className="landing-intro-header featured">{t('featured')}</h2>
          <p>{t('description')}</p>
        </Stack>
        <Card key={projects[0].key} data={projects[0]} />
      </Stack>
    </section>
  );
}

export default LandingFeatured;
