import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';
import Bryan from '../../../assets/pictograms/bryan.jpeg';
import './landingIntro.scss';

function LandingIntro() {
  const [t] = useTranslation();
  return (
    <section className="landing-intro">
      <div className="max-content-width">
        <Stack className="landing-intro-stack" flexDirection="column" alignItems="center">
          <h2 className="landing-intro-header">{t('landing.landingIntro.header')}</h2>
          <img className="landing-intro-picture" src={Bryan} alt="bryan" />
        </Stack>
      </div>
    </section>
  );
}

export default LandingIntro;
