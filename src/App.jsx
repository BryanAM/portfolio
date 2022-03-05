import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';
import i18n from './i18next';
import { Card } from './components/index';

function App() {
  const [t] = useTranslation();

  const changeLng = () => {
    const lng = i18n.language === 'en' ? 'jp' : 'en';
    document.documentElement.lang = lng;
    i18n.changeLanguage(lng)
      .catch((err) => {
        console.log('something went wrong loading', err);
      });
  };

  return (
    <div className="App">
      <h1>
        {t('common.welcome')}
      </h1>
      <button type="button" onClick={changeLng}>{t('common.change-lng')}</button>
      <Card />
    </div>
  );
}

export default App;
