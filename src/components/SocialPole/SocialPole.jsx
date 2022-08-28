import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/pictograms/github.svg';
import { ReactComponent as EmailIcon } from '../../assets/pictograms/sms.svg';
import './socialPole.scss';

function SocialPole() {
  const handleOnClick = () => {
    window.location = "mailto:bryaument@gmail.com?subject=Hi, I'm reaching out from your website";
  };

  return (
    <div className="social-pole">
      <a href="https://github.com/BryanAM" aria-label="github link" target="_blank" rel="noopener noreferrer"><GithubIcon className="social-pole-github-icon" /></a>
      <a href="https://www.linkedin.com/in/bryanaument/" target="_blank" rel="noopener noreferrer">LIn</a>
      <button className="social-pole-mail-button" type="button" aria-label="email button" onClick={handleOnClick}><EmailIcon className="social-pole-email-icon" /></button>
      <hr className="social-pole-bar" />
    </div>
  );
}

export default SocialPole;
