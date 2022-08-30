import React from 'react';
import { motion } from 'framer-motion';
import GithubIcon from '../../assets/pictograms/github.svg';
import EmailIcon from '../../assets/pictograms/sms.svg';
import LinkedInIcon from '../../assets/pictograms/linkedin.svg';
import Stack from '../Stack/Stack';
import './socialPole.scss';

function SocialPole() {
  const handleOnClick = () => {
    window.location = "mailto:bryaument@gmail.com?subject=Hi, I'm reaching out from your website";
  };

  return (
    <Stack className="social-pole" verticalSpacing={10} flexDirection="column" alignContent="center">
      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://github.com/BryanAM" className="social-pole-link" aria-label="github link" target="_blank" rel="noopener noreferrer">
        <img src={GithubIcon} alt="github" className="social-pole-github-icon" />
      </motion.a>
      <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/bryanaument/" className="social-pole-link" aria-label="github link" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="github" className="social-pole-github-icon" />
      </motion.a>
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="social-pole-mail-button" type="button" aria-label="email button" onClick={handleOnClick}>
        <img src={EmailIcon} alt="email" className="social-pole-email-icon" />
      </motion.button>
      <hr className="social-pole-bar" />
    </Stack>
  );
}

export default SocialPole;
