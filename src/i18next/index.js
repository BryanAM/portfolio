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
      common: en,
    },
    jp: {
      common: jp,
    },
  },

  ns: ['common'],
  defaultNS: 'common',

  react: {
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
    useSuspense: false,
  },
};

i18n
  .use(LanguageDetector)
  .init(options);

// set html tag on init
document.documentElement.lng = i18n.language;

export default i18n;