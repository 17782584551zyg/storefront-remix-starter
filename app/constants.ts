export const APP_META_TITLE = 'Vendure Remix Storefront';
export const APP_META_DESCRIPTION =
  'A headless commerce storefront starter kit built with Remix & Vendure';
export const DEMO_API_URL = 'https://readonlydemo.vendure.io/shop-api';
export let API_URL =
  typeof process !== 'undefined'
    ? process.env.VENDURE_API_URL ?? DEMO_API_URL
    : DEMO_API_URL;

export const BACKEND_URL = API_URL.replace('/shop-api', '');

export function getImageUrl(
  preview: string | undefined,
  options: {
    w?: number;
    h?: number;
    preset?: string;
    backendUrl?: string;
  } = {},
): string {
  if (!preview) {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f3f4f6" width="200" height="200"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo image%3C/text%3E%3C/svg%3E';
  }

  const backendUrl = options.backendUrl || BACKEND_URL;
  let url: string;

  if (preview.startsWith('http')) {
    const backendBase = backendUrl + '/assets/';
    if (preview.startsWith(backendBase)) {
      url = '/api/assets/' + preview.substring(backendBase.length);
    } else {
      url = preview;
    }
  } else if (preview.startsWith('/')) {
    url = '/api/assets' + preview;
  } else {
    url = '/api/assets/' + preview;
  }

  const params: string[] = [];
  if (options.w) params.push('w=' + options.w);
  if (options.h) params.push('h=' + options.h);
  if (options.preset) params.push('preset=' + options.preset);
  if (params.length > 0) {
    const separator = url.includes('?') ? '&' : '?';
    url = url + separator + params.join('&');
  }
  return url;
}

/**
 * This function is used when running in Cloudflare Pages in order to set the API URL
 * based on an environment variable. Env vars work differently in CF Pages and are not available
 * on the `process` object (which does not exist). Instead, it needs to be accessed from the loader
 * context, and if defined we use it here to set the API_URL var which will be used by the
 * GraphQL calls.
 *
 * See https://developers.cloudflare.com/workers/platform/environment-variables/#environmental-variables-with-module-workers
 */
export function setApiUrl(apiUrl: string) {
  API_URL = apiUrl;
}
