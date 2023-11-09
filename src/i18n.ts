import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslation from './locales/pt.json';
import enTranslation from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: ptTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: 'pt', // Define o idioma padrão
  fallbackLng: 'pt', // Idioma de fallback se a tradução não estiver disponível
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;