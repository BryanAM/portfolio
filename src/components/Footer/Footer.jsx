import React from 'react';
import { motion } from 'framer-motion';
import Stack from '../Stack/Stack';
import { ReactComponent as MeIcon } from '../../assets/pictograms/me.svg';
import { ReactComponent as GithubIcon } from '../../assets/pictograms/github.svg';
import { ReactComponent as EmailIcon } from '../../assets/pictograms/sms.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/pictograms/linkedin.svg';
import './footer.scss';

function Footer() {
  const handleOnClick = () => {
    window.location = "mailto:bryaument@gmail.com?subject=Hi, I'm reaching out from your website";
  };
  return (
    <div className="footer">
      <Stack className="footer-outer-stack" flexDirection="row" alignItems="stretch" justifyContent="space-between">
        <Stack flexDirection="column" justifyContent="space-between">
          <MeIcon className="footer-me-icon" />
          <p>© 2022-present Bryan Aument. All Rights Reserved.</p>
        </Stack>
        <Stack flexDirection="column">
          <h3>Links</h3>
          <Stack className="footer-links-stack" flexDirection="column" alignContent="center">
            <motion.a className="footer-link" whileTap={{ scale: 0.9 }} href="https://github.com/BryanAM" aria-label="github link" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="footer-link-icon" />
              <p>github</p>
            </motion.a>
            <motion.a className="footer-link" whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/bryanaument/" aria-label="github link" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="footer-link-icon" />
              <p>Linkedin</p>
            </motion.a>
            <motion.button className="footer-link-button" whileTap={{ scale: 0.9 }} type="button" aria-label="email button" onClick={handleOnClick}>
              <EmailIcon className="footer-link-icon" />
              <p>Email</p>
            </motion.button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default Footer;
