import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../../components/index';

import './landingHero.scss';

function LandingHero() {
  const [t] = useTranslation();

  /*
    Note you need to declare an initial for animate
    with staggerChildren even if the initial prop isn't here.
    See parent div for example
  */
  const container = {
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: -25,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      className="landing-hero max-content-width"
      variants={container}
      initial="initial"
      animate="show"
    >
      <Stack className="landing-hero-stack" flexDirection="column" alignItems="flex-start">
        <motion.h1
          className="landing-hero-name font-size-700"
          variants={child}
        >
          {t('common.name')}
        </motion.h1>
        <motion.h2
          className="landing-hero-title font-size-300"
          variants={child}
        >
          {t('common.title')}
        </motion.h2>
        <motion.p
          className="landing-hero-intro font-size-200"
          variants={child}
        >
          {t('landing.hero.intro')}
        </motion.p>
      </Stack>
    </motion.section>
  );
}

export default LandingHero;
