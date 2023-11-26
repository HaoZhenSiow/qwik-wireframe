import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import './fonts.css'
import './init.css'
import './global.css'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/fonts/open-sans-v36-latin/open-sans-v36-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/open-sans-v36-latin/open-sans-v36-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* <link rel="preload" href="/fonts/ubuntu-v20-latin/ubuntu-v20-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/comforter-v7-latin/comforter-v7-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        <link rel="preload" href="/build/q-5cbd6403.js" as="script" type="text/javascript" crossOrigin="anonymous" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
