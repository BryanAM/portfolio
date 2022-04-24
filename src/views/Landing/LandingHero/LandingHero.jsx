import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';
import './landingHero.scss';

function LandingHero() {
  const [t] = useTranslation();
  return (
    <section className="landing-hero">
      <Stack flexDirection="column" alignItems="center">
        <h1 className="landing-hero-name font-size-500">{t('common.name')}</h1>
        <h2 className="font-size-400">{t('common.title')}</h2>
        <p className="font-size-200">{t('landing.hero.intro')}</p>
      </Stack>
    </section>
  );
}

export default LandingHero;
