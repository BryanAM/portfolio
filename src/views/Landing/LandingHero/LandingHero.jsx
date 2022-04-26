import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';
import { useTheme } from '../../../contexts/themeContext';

import './landingHero.scss';

function LandingHero() {
  const [t] = useTranslation();
  const { theme, setTheme } = useTheme();
  return (
    <section className="landing-hero">
      <Stack flexDirection="column" alignItems="flex-start">
        <button type="button" onClick={() => setTheme(theme === 'theme' ? 'theme-dark' : 'theme')}>Theme</button>
        <h1 className="landing-hero-name font-size-700">{t('common.name')}</h1>
        <h2 className="landing-hero-title font-size-300">{t('common.title')}</h2>
        <p className="landing-hero-intro font-size-200">{t('landing.hero.intro')}</p>
      </Stack>
    </section>
  );
}

export default LandingHero;
