import { BACKEND_URL } from '~/constants';
import { DataFunctionArgs } from '@remix-run/server-runtime';

export async function loader({ request, params }: DataFunctionArgs) {
  const path = params['*'];
  if (!path) {
    return new Response(null, { status: 404 });
  }

  const assetUrl = `${BACKEND_URL}/assets/${path}`;
  
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
