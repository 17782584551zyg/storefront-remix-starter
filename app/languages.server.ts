import { safeRequireNodeDependency } from '~/utils/platform-adapter';

const languagesServer: { [key: string]: string } = {
  en: '../public/locales/en.json',
  fr: '../public/locales/fr.json',
  de: '../public/locales/de.json',
  zh: '../public/locales/zh.json',
  es: '../public/locales/es.json',
  it: '../public/locales/it.json',
  nl: '../public/locales/nl.json',
  pl: '../public/locales/pl.json',
  sv: '../public/locales/sv.json',
  da: '../public/locales/da.json',
  no: '../public/locales/no.json',
};

export async function findLanguageJSON(language: string, namespace: string) {
  const filePath = languagesServer[language];

  if (filePath) {
    try {
      const fs = await safeRequireNodeDependency('fs');
      const path = await safeRequireNodeDependency('path');
      const url = await safeRequireNodeDependency('url');

      const dirname = path.dirname(url.fileURLToPath(import.meta.url));
      const fullPath = path.join(dirname, '..', filePath);
      const content = fs.readFileSync(fullPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Failed to load language ${language}:`, error);
    }
  }

  return Promise.reject(new Error(`Language not found: ${language}`));
}
