import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';
import sajeon from '../../../assets/pictograms/sajeon.png';
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
        <motion.div whileHover={{ scale: 1.01 }} className="landing-intro-feature-card">
          <img className="image" src={sajeon} alt="sajeon" />
          <a className="landing-intro-feature-card-anchor" href="http://labs.midknightelectric.com" target="_blank" rel="noreferrer" aria-label="sajeon link">{t('anchor')}</a>
        </motion.div>
      </Stack>
    </section>
  );
}

export default LandingFeatured;
