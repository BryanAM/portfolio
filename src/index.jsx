import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18next/index';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/themeContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const app = (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </I18nextProvider>
);

root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
