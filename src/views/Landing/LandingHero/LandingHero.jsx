import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';
import { ReactComponent as BlobIcon } from '../../../assets/pictograms/blob.svg';

import './landingHero.scss';

function LandingHero() {
  const [t] = useTranslation();
  return (
    <section className="landing-hero max-content-width">
      <Stack className="landing-hero-stack" flexDirection="column" alignItems="flex-start">
        <h1 className="landing-hero-name font-size-700">{t('common.name')}</h1>
        <h2 className="landing-hero-title font-size-300">{t('common.title')}</h2>
        <p className="landing-hero-intro font-size-200">{t('landing.hero.intro')}</p>
      </Stack>
      <BlobIcon className="blob-icon" />
    </section>
  );
}

export default LandingHero;
