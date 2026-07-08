import { BACKEND_URL } from '~/constants';
import { DataFunctionArgs } from '@remix-run/server-runtime';

export async function loader({ params, request }: DataFunctionArgs) {
  const assetPath = params['*'];
  const url = `${BACKEND_URL}/assets/${assetPath}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    return new Response(null, { status: response.status });
  }
  
  const responseHeaders = new Headers();
  
  const contentType = response.headers.get('content-type');
  if (contentType) {
    responseHeaders.set('Content-Type', contentType);
  }
  
  const contentLength = response.headers.get('content-length');
  if (contentLength) {
    responseHeaders.set('Content-Length', contentLength);
  }
  
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  
  const arrayBuffer = await response.arrayBuffer();
  
  return new Response(arrayBuffer, {
    status: response.status,
    headers: responseHeaders,
  });
}