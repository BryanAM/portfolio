import React from 'react';
import { useTranslation } from 'react-i18next';
import './underConstruction.scss';

function UnderConstruction() {
  const [t] = useTranslation();
  return (
    <>
      <h1>{t('underConstruction.heading')}</h1>
      <p>{t('underConstruction.description')}</p>
    </>
  );
}

export default UnderConstruction;
