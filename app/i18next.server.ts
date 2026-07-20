import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-fs-backend';
import { RemixI18Next } from 'remix-i18next/server';
import i18nConfig from './i18n';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const remixI18next = new RemixI18Next({
  detection: {
    supportedLngs: i18nConfig.supportedLngs,
    fallbackLng: i18nConfig.fallbackLng,
    order: ['cookie', 'header'],
    caches: ['cookie'],
    cookie: {
      name: 'i18next',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    },
  },
  i18next: {
    ...i18nConfig,
    backend: {
      loadPath: path.join(__dirname, '../public/locales/{{lng}}.json'),
    },
    preload: i18nConfig.supportedLngs,
  },
  backend: Backend,
});

export const { getFixedT } = remixI18next;
