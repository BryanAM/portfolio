import React from 'react';
import { Stack } from '../../../components/index';
import Bryan from '../../../assets/pictograms/bryan.jpeg';
import './landingIntro.scss';

function LandingIntro() {
  return (
    <section className="landing-intro">
      <div className="max-content-width">
        <Stack flexDirection="row" flexWrap="wrap">
          <p>Intro Text</p>
          <img className="landing-intro-picture" src={Bryan} alt="bryan" />
        </Stack>
      </div>
    </section>
  );
}

export default LandingIntro;
