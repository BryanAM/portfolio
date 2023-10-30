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
        i18next.changeLanguage(i18next.language === 'en-US' ? 'jp' : 'en-US');
      }}
    >
      {t(`common.${i18next.language === 'en-US' ? 'jp' : 'en-US'}`)}
    </button>
  );
}

export default LanguageSwitcher;
