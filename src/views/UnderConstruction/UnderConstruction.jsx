import React from 'react';
import { useTranslation } from 'react-i18next';
import './underConstruction.scss';
import { ReactComponent as BoxIcon } from '../../assets/pictograms/box-1.2.svg';

function UnderConstruction() {
  const [t] = useTranslation();
  return (
    <section className="under-construction">
      <h1>{t('underConstruction.heading')}</h1>
      <p>{t('underConstruction.description')}</p>
      <div className="under-construction-boxes">
        <BoxIcon className="under-construction-box" />
        <BoxIcon className="under-construction-box" />
        <BoxIcon className="under-construction-box" />
      </div>
    </section>
  );
}

export default UnderConstruction;
