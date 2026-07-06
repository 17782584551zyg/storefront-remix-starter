export default {
  supportedLngs: ['en', 'fr', 'de', 'zh', 'es', 'it', 'nl', 'pl', 'sv', 'da', 'no'],
  fallbackLng: 'en',
  react: { useSuspense: false },
  backend: {
    loadPath: '../public/locales/{{lng}}.json',
  },
};