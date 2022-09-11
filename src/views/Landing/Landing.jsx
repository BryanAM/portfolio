import React from 'react';
import LandingHero from './LandingHero/LandingHero';
import LandingIntro from './LandingIntro/LandingIntro';
import { Stack } from '../../components/index';
import './landing.scss';

function Landing() {
  return (
    <Stack className="landing-view" flexDirection="column" alignItems="center">
      <LandingHero />
      <LandingIntro />
    </Stack>
  );
}

export default Landing;
