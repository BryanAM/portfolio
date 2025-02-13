import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Stack } from "../../../components/index";
import Bryan from "../../../assets/pictograms/bryan.jpeg";

import "./landingIntro.scss";

function LandingIntro() {
  const [t] = useTranslation("", { keyPrefix: "landing.landingIntro" });

  const container = {
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0 },
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
    <motion.section className="landing-intro">
      <motion.div
        className="max-content-width"
        variants={container}
        initial="initial"
        viewport={{ once: true }}
        whileInView="show"
      >
        <Stack
          className="landing-intro-stack"
          flexDirection="column"
          alignItems="center"
        >
          <Stack flexDirection="column">
            <motion.h2 className="landing-intro-header" variants={child}>
              {t("header")}
            </motion.h2>
            <motion.p variants={child}>{t("about")}</motion.p>
          </Stack>
          <motion.img
            className="landing-intro-picture"
            src={Bryan}
            alt="bryan"
            variants={child}
          />
        </Stack>
      </motion.div>
    </motion.section>
  );
}

export default LandingIntro;
