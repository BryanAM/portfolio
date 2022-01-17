import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, jp } from './locales/index';

const options = {
  interpolation: {
    escapeValue: false,
  },

  caches: ['localStorage', 'cookie'],
  fallbackLng: 'en',
  debug: true,

  resources: {
    en: {
      common: en.en,
    },
    jp: {
      common: jp.jp,
    },
  },

  ns: ['common'],
  defaultNS: 'common',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
};

i18n
  .use(LanguageDetector)
  .init(options);

// set html tag on init
document.documentElement.lng = i18n.language;

export default i18n;