import { API_URL } from '~/constants';
import { DataFunctionArgs } from '@remix-run/server-runtime';

export async function loader({ request, params }: DataFunctionArgs) {
  let path = params['*'];
  if (!path) {
    return new Response(null, { status: 404 });
  }

  if (path.startsWith('assets/')) {
    path = path.substring(7);
  }

  const backendUrl = API_URL.replace('/shop-api', '');
  const url = new URL(request.url);
  const assetUrl = `${backendUrl}/assets/${path}${url.search}`;

  const response = await fetch(assetUrl);

  if (!response.ok) {
    return new Response(null, { status: response.status });
  }

  const responseHeaders = new Headers(response.headers);
  responseHeaders.set('Access-Control-Allow-Origin', '*');

  return new Response(response.body, {
    status: response.status,
    headers: responseHeaders,
  });
}
