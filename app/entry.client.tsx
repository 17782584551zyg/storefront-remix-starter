import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import { StrictMode } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nConfig from './i18n';

async function initApp() {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      backend: {
        loadPath: '/locales/{{lng}}.json',
      },
      detection: {
        order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['cookie'],
        cookie: {
          name: 'i18next',
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });

  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
  );
}

initApp();
