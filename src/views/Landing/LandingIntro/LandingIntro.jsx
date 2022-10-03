import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';
import Bryan from '../../../assets/pictograms/bryan.jpeg';
import './landingIntro.scss';

function LandingIntro() {
  const [t] = useTranslation('', { keyPrefix: 'landing.landingIntro' });
  return (
    <section className="landing-intro">
      <div className="max-content-width">
        <Stack className="landing-intro-stack" flexDirection="column" alignItems="center">
          <Stack flexDirection="column">
            <h2 className="landing-intro-header">{t('header')}</h2>
            <p>{t('about')}</p>
          </Stack>
          <img className="landing-intro-picture" src={Bryan} alt="bryan" />
        </Stack>
      </div>
    </section>
  );
}

export default LandingIntro;
