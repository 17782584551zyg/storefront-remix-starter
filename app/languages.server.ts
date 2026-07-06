const languagesServer: { [key: string]: () => any } = {
  en: () => import('../public/locales/en.json'),
  fr: () => import('../public/locales/fr.json'),
  de: () => import('../public/locales/de.json'),
  zh: () => import('../public/locales/zh.json'),
  es: () => import('../public/locales/es.json'),
  it: () => import('../public/locales/it.json'),
  nl: () => import('../public/locales/nl.json'),
  pl: () => import('../public/locales/pl.json'),
  sv: () => import('../public/locales/sv.json'),
  da: () => import('../public/locales/da.json'),
  no: () => import('../public/locales/no.json'),
};

export function findLanguageJSON(language: string, namespace: string) {
  const lngNs = `${language}-${namespace}`;

  const importFn =
    lngNs in languagesServer
      ? languagesServer[lngNs]
      : languagesServer[language];

  if (importFn) {
    return importFn();
  }

  return Promise.reject();
}