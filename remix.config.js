import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const commonConfig = {
  appDirectory: 'app',
  serverModuleFormat: 'esm',
  serverDependenciesToBundle: [
    'remix-i18next',
    '@remix-validated-form/with-zod',
  ],
  tailwind: true,
  routes(defineRoutes) {
    return defineRoutes(route => {
      // Homepage (index route)
      route('', 'routes/index.tsx', { index: true });
      
      // Checkout routes with layout
      route('checkout', 'routes/checkout.tsx', () => {
        route('payment', 'routes/checkout.payment.tsx');
        route('confirmation/:orderCode', 'routes/checkout.confirmation.$orderCode.tsx');
        route('', 'routes/checkout._index.tsx', { index: true });
      });
      
      // Account routes with layout
      route('account', 'routes/account.tsx', () => {
        route('history', 'routes/account.history.tsx');
        route('password', 'routes/account.password.tsx');
        route('addresses', 'routes/account.addresses.tsx');
        route('addresses/new', 'routes/account.addresses.new.tsx');
        route('addresses/:addressId', 'routes/account.addresses.$addressId.tsx');
        route('', 'routes/account._index.tsx', { index: true });
      });
      
      // Other routes
      route('collections/:slug', 'routes/collections.$slug.tsx');
      route('products/:slug', 'routes/products.$slug.tsx');
      route('search', 'routes/search.tsx');
      route('sign-in', 'routes/sign-in.tsx');
      route('sign-up', 'routes/sign-up.index.tsx');
      route('sign-up/success', 'routes/sign-up.success.tsx');
      route('verify', 'routes/verify.tsx');
      route('verify-email-address-change', 'routes/verify-email-address-change.tsx');
      
      // API routes
      route('api/active-order', 'routes/api.active-order.tsx');
      route('api/logout', 'routes/api.logout.ts');
    });
  },
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const cloudflarePagesConfig = {
  serverBuildPath: 'functions/[[path]].js',
  serverPlatform: 'neutral',
  server: './server-cloudflare-pages.js',
  ignoredRouteFiles: ['**/.*'],
  serverMinify: true,
  ...commonConfig,
};
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const netlifyConfig = {
  serverBuildTarget: 'netlify',
  server: './server-netlify.js',
  ignoredRouteFiles: ['**/.*'],
  ...commonConfig,
};
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const devConfig = {
  appDirectory: 'app',
  serverModuleFormat: 'cjs',
  devServerPort: 8002,
  ignoredRouteFiles: ['.*'],
  ...commonConfig,
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const buildConfig = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  serverModuleFormat: 'cjs',
  ignoredRouteFiles: ['.*'],
  ...commonConfig,
};

function selectConfig() {
  if (!['development', 'production'].includes(process.env.NODE_ENV))
    throw new Error(`Unknown NODE_ENV: ${process.env.NODE_ENV}`);
  if (process.env.CF_PAGES) return cloudflarePagesConfig;
  if (process.env.NETLIFY) return netlifyConfig;
  if (process.env.NODE_ENV === 'development') return devConfig;
  if (!process.env.CF_PAGES && !process.env.NETLIFY) return buildConfig;
  throw new Error(`Cannot select config`);
}

export default selectConfig();
