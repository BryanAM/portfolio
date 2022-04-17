import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';
import i18n from './i18next';
import { Card } from './components/index';
import { useTheme } from './contexts/themeContext';

function App() {
  const [t] = useTranslation();
  const { theme, setTheme } = useTheme();

  const changeLng = () => {
    const lng = i18n.language === 'en' ? 'jp' : 'en';
    document.documentElement.lang = lng;
    i18n.changeLanguage(lng)
      .catch((err) => {
        console.log('something went wrong loading', err);
      });
  };

  useEffect(() => {
    const schema = document.querySelector('meta[name="theme-color"]');
    const style = getComputedStyle(document.body.querySelector('.App'));
    const headerColor = style.getPropertyValue('--app-bg-color');
    schema.setAttribute('content', headerColor);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div>
        <button className="theme-button" type="button" onClick={() => setTheme('theme')}>🐠</button>
        <button className="theme-button" type="button" onClick={() => setTheme('theme-dark')}>🌙</button>
        <button className="theme-button" type="button" onClick={() => setTheme('theme-coffee')}>☕</button>
      </div>
      <Card>
        <h1>
          {t('common.welcome')}
        </h1>
        <button className="change-language-btn" type="button" onClick={changeLng}>{t('common.change-lng')}</button>
      </Card>
    </div>
  );
}

export default App;
