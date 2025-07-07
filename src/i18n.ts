import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enFeatures from './locales/en/features.json';
import enCommunity from './locales/en/community.json';
import enWhoWeAre from './locales/en/whoWeAre.json';
import enCallToAction from './locales/en/callToAction.json';
import enFooter from './locales/en/footer.json';
import enTerms from './locales/en/terms.json';

import esCommon from './locales/es/common.json';
import esHero from './locales/es/hero.json';
import esFeatures from './locales/es/features.json';
import esCommunity from './locales/es/community.json';
import esWhoWeAre from './locales/es/whoWeAre.json';
import esCallToAction from './locales/es/callToAction.json';
import esFooter from './locales/es/footer.json';
import esTerms from './locales/es/terms.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        hero: enHero,
        features: enFeatures,
        community: enCommunity,
        whoWeAre: enWhoWeAre,
        callToAction: enCallToAction,
        footer: enFooter,
        terms: enTerms,
      },
      es: {
        common: esCommon,
        hero: esHero,
        features: esFeatures,
        community: esCommunity,
        whoWeAre: esWhoWeAre,
        callToAction: esCallToAction,
        footer: esFooter,
        terms: esTerms,
      },
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    ns: ['common', 'hero', 'features', 'community', 'whoWeAre', 'callToAction', 'footer', 'terms'],
    defaultNS: 'common',
  });

export default i18n; 