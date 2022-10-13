import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.scss';

function LanguageSwitcher() {
  const [t, i18next] = useTranslation();

  return (
    <button
      className="text-button"
      type="button"
      onClick={() => {
        i18next.changeLanguage(i18next.language === 'en' ? 'jp' : 'en');
      }}
    >
      {t(`common.${i18next.language === 'en' ? 'jp' : 'en'}`)}
    </button>
  );
}

export default LanguageSwitcher;
