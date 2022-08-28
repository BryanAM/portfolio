import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/pictograms/github.svg';
import './socialPole.scss';

function SocialPole() {
  return (
    <div className="social-pole">
      <GithubIcon className="social-pole-github-icon" />
      <div className="social-pole-bar" />
    </div>
  );
}

export default SocialPole;
