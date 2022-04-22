import React from 'react';
import { useTranslation } from 'react-i18next';
import './landingHero.scss';

function LandingHero() {
  const [t] = useTranslation();
  return (
    <section className="landing-hero">
      <h1 className="landing-hero-name font-hg">{t('common.name')}</h1>
    </section>
  );
}

export default LandingHero;
