import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import projects from '../../../assets/data/projects';
import { Card, Stack } from '../../../components/index';
import './landingFeatured.scss';

function LandingFeatured() {
  const [t] = useTranslation('', { keyPrefix: 'landing.landingFeatured' });

  const container = {
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.4 },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      className="landing-featured"
      variants={container}
      initial="initial"
      viewport={{ once: true }}
      whileInView="show"
    >
      <Stack className="landing-featured-containter max-content-width" flexDirection="column">
        <Stack flexDirection="column">
          <motion.h2 className="landing-intro-header featured" variants={child}>{t('featured')}</motion.h2>
          <motion.p variants={child}>{t('description')}</motion.p>
        </Stack>
        <motion.span variants={child}>
          <Card key={projects[0].key} data={projects[0]} />
        </motion.span>
      </Stack>
    </motion.section>
  );
}

export default LandingFeatured;
