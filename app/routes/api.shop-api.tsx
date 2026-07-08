import { API_URL } from '~/constants';
import { DataFunctionArgs } from '@remix-run/server-runtime';

export async function loader() {
  return new Response(null, { status: 404 });
}

export async function action({ request }: DataFunctionArgs) {
  const body = await request.text();
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  
  const authHeader = request.headers.get('Authorization');
  if (authHeader) {
    headers.set('Authorization', authHeader);
  }
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers,
    body,
  });

  const responseBody = await response.text();
  const responseHeaders = new Headers(response.headers);
  responseHeaders.set('Access-Control-Allow-Origin', '*');

  return new Response(responseBody, {
    status: response.status,
    headers: responseHeaders,
  });
}
