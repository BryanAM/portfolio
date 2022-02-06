import React from 'react';
import { useTranslation  } from 'react-i18next';
import './App.css';
import i18n from './i18next';

const App = () => {
  const [t] = useTranslation();

  const changeLng = () => {
    const lng = i18n.language === 'en' ? 'jp' : 'en';
    document.documentElement.lang = lng;
    i18n.changeLanguage(lng, (err) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  return (
    <div className="App">
      <h1>{t('common.welcome')}🤓</h1>
      <button onClick={changeLng}>{t('common.change-lng')}</button>
    </div>
  );
}

export default App;
