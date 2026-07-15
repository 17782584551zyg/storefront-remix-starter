/** @type {import('@remix-run/dev').AppConfig} */
import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

export default {
  ignoredRouteFiles: ['**/.*'],
  routes(defineRoutes) {
    return createRoutesFromFolders(defineRoutes);
  },
};
