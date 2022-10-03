import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as GithubIcon } from '../../assets/pictograms/github.svg';
import { ReactComponent as EmailIcon } from '../../assets/pictograms/sms.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/pictograms/linkedin.svg';
import Stack from '../Stack/Stack';
import './socialPole.scss';

function SocialPole() {
  const handleOnClick = () => {
    window.location = "mailto:bryaument@gmail.com?subject=Hi, I'm reaching out from your website";
  };

  return (
    <Stack className="social-pole" flexDirection="column" alignContent="center">
      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} href="https://github.com/BryanAM" className="social-pole-link" aria-label="github link" target="_blank" rel="noopener noreferrer">
        <GithubIcon className="social-pole-github-icon" />
      </motion.a>
      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/bryanaument/" className="social-pole-link" aria-label="github link" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="social-pole-linkin-icon" />
      </motion.a>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="social-pole-mail-button" type="button" aria-label="email button" onClick={handleOnClick}>
        <EmailIcon className="social-pole-email-icon" />
      </motion.button>
      <hr className="social-pole-bar" />
    </Stack>
  );
}

export default SocialPole;
