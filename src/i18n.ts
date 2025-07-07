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
import enPrivacy from './locales/en/privacy.json';

import esCommon from './locales/es/common.json';
import esHero from './locales/es/hero.json';
import esFeatures from './locales/es/features.json';
import esCommunity from './locales/es/community.json';
import esWhoWeAre from './locales/es/whoWeAre.json';
import esCallToAction from './locales/es/callToAction.json';
import esFooter from './locales/es/footer.json';
import esTerms from './locales/es/terms.json';
import esPrivacy from './locales/es/privacy.json';

import deCommon from './locales/de/common.json';
import deHero from './locales/de/hero.json';
import deFeatures from './locales/de/features.json';
import deCommunity from './locales/de/community.json';
import deWhoWeAre from './locales/de/whoWeAre.json';
import deCallToAction from './locales/de/callToAction.json';
import deFooter from './locales/de/footer.json';
import deTerms from './locales/de/terms.json';
import dePrivacy from './locales/de/privacy.json';
import deTcgGames from './locales/de/tcggames.json';

import itCommon from './locales/it/common.json';
import itHero from './locales/it/hero.json';
import itFeatures from './locales/it/features.json';
import itCommunity from './locales/it/community.json';
import itWhoWeAre from './locales/it/whoWeAre.json';
import itCallToAction from './locales/it/callToAction.json';
import itFooter from './locales/it/footer.json';
import itTerms from './locales/it/terms.json';
import itPrivacy from './locales/it/privacy.json';
import itTcgGames from './locales/it/tcggames.json';

import ptBRCommon from './locales/pt-BR/common.json';
import ptBRHero from './locales/pt-BR/hero.json';
import ptBRFeatures from './locales/pt-BR/features.json';
import ptBRCommunity from './locales/pt-BR/community.json';
import ptBRWhoWeAre from './locales/pt-BR/whoWeAre.json';
import ptBRCallToAction from './locales/pt-BR/callToAction.json';
import ptBRFooter from './locales/pt-BR/footer.json';
import ptBRTerms from './locales/pt-BR/terms.json';
import ptBRPrivacy from './locales/pt-BR/privacy.json';
import ptBRTcgGames from './locales/pt-BR/tcggames.json';

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
        privacy: enPrivacy,
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
        privacy: esPrivacy,
      },
      de: {
        common: deCommon,
        hero: deHero,
        features: deFeatures,
        community: deCommunity,
        whoWeAre: deWhoWeAre,
        callToAction: deCallToAction,
        footer: deFooter,
        terms: deTerms,
        privacy: dePrivacy,
        tcggames: deTcgGames,
      },
      it: {
        common: itCommon,
        hero: itHero,
        features: itFeatures,
        community: itCommunity,
        whoWeAre: itWhoWeAre,
        callToAction: itCallToAction,
        footer: itFooter,
        terms: itTerms,
        privacy: itPrivacy,
        tcggames: itTcgGames,
      },
      'pt-BR': {
        common: ptBRCommon,
        hero: ptBRHero,
        features: ptBRFeatures,
        community: ptBRCommunity,
        whoWeAre: ptBRWhoWeAre,
        callToAction: ptBRCallToAction,
        footer: ptBRFooter,
        terms: ptBRTerms,
        privacy: ptBRPrivacy,
        tcggames: ptBRTcgGames,
      },
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    ns: ['common', 'hero', 'features', 'community', 'whoWeAre', 'callToAction', 'footer', 'terms', 'privacy', 'tcggames'],
    defaultNS: 'common',
  });

export default i18n; 