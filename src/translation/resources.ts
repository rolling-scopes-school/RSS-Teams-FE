import { CURRENT_LANG, Langs } from 'appConstants';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en/en.json';
import translationRU from './ru/ru.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

const language = localStorage.getItem(CURRENT_LANG) ?? Langs.English;

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
