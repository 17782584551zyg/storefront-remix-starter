import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import i18n from '~/i18n';
import { startTransition, StrictMode } from 'react';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

startTransition(() => {
  i18next
    .use(initReactI18next)
    .use(HttpBackend)
    .use(LanguageDetector)
    .init({
      ...i18n,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}.json',
      },
    })
    .then(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <RemixBrowser />
        </StrictMode>,
      );
    });
});
