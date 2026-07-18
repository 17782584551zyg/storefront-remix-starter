import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import stylesheet from './tailwind.css';
import { json, LinksFunction } from '@remix-run/server-runtime';
import { Header } from './components/header/Header';
import Footer from './components/footer/Footer';
import { CartTray } from './components/cart/CartTray';
import { useState, useEffect } from 'react';
import { useActiveOrder } from './utils/use-active-order';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

const devMode =
  typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

import { API_URL, BACKEND_URL, setBackendUrl } from './constants';

export async function loader() {
  return json({
    activeCustomer: { activeCustomer: null, _headers: {} },
    activeChannel: {
      id: '1',
      currencyCode: 'USD',
      customFields: { bannerImages: [] },
    },
    collections: [],
    locale: 'en',
    backendUrl: BACKEND_URL,
    apiUrl: API_URL,
  });
}

export default function App() {
  const [open, setOpen] = useState(false);
  const loaderData = useLoaderData();
  const { collections } = loaderData;
  const { activeOrderFetcher, activeOrder, adjustOrderLine, removeItem } =
    useActiveOrder(loaderData.backendUrl);

  useEffect(() => {
    setBackendUrl(loaderData.backendUrl);
  }, [loaderData.backendUrl]);

  return (
    <html lang="zh" dir="ltr" id="app">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/png"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Header
          onCartIconClick={() => setOpen(!open)}
          cartQuantity={activeOrder?.totalQuantity ?? 0}
        />
        <main className="py-8">
          <Outlet
            context={{
              activeOrderFetcher,
              activeOrder,
              adjustOrderLine,
              removeItem,
              backendUrl: loaderData.backendUrl,
            }}
          />
        </main>
        <CartTray
          open={open}
          onClose={setOpen}
          activeOrder={activeOrder}
          adjustOrderLine={adjustOrderLine}
          removeItem={removeItem}
          backendUrl={loaderData.backendUrl}
        />
        <ScrollRestoration />
        <Scripts />
        <Footer collections={collections}></Footer>
        {devMode && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en" id="app">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/png"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="flex flex-col items-center px-4 py-16 sm:py-32 text-center">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Error
          </span>
          <h1 className="mt-2 font-bold text-gray-900 tracking-tight text-4xl sm:text-5xl">
            Unexpected error
          </h1>
        </main>
        <ScrollRestoration />
        <Scripts />
        {devMode && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return ErrorBoundary();
}
