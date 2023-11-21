/*
 * WHAT IS THIS FILE?
 *
 * The service-worker.ts file is used to have state of the art prefetching.
 * https://qwik.builder.io/qwikcity/prefetching/overview/
 *
 * Qwik uses a service worker to speed up your site and reduce latency, ie, not used in the traditional way of offline.
 * You can also use this file to add more functionality that runs in the service worker.
 */
import { setupServiceWorker } from "@builder.io/qwik-city/service-worker"

const VERSION = 'v1',
      ALLOW_ORIGIN: string[] = []

const CACHE_FIRST_RESOURCE = [
  '/ID/top.webp',
  '/ID/prestige100.webp',
  '/ID/sme.webp',
  '/ID/topService.webp',
  '/ID/bizsafe.webp',
  '/ID/top2023.webp',
  '/ID/elitEnterprice.webp',
  '/fonts/ubuntu-v20-latin/ubuntu-v20-latin-regular.woff2',
  '/fonts/ubuntu-v20-latin/ubuntu-v20-latin-700.woff2',
  '/fonts/open-sans-v36-latin/open-sans-v36-latin-regular.woff2',
  '/fonts/open-sans-v36-latin/open-sans-v36-latin-700.woff2'
]

const CROSS_ORIGIN_RESOURCES: string[] = []

const NETWORK_FIRST_RESOURCES: string[] = []

const RESOURCES = [...CACHE_FIRST_RESOURCE, ...NETWORK_FIRST_RESOURCES]

// const CACHE_FIRST_PREFIX = '/build/q-'

setupServiceWorker()

addEventListener("install", cacheFiles)

self.addEventListener('activate', deleteOldKeys)

addEventListener('fetch', fetchResources)

addEventListener("activate", () => self.clients.claim())

declare const self: ServiceWorkerGlobalScope;

function cacheFiles(event: any) {
  event.waitUntil(
    (async () => {
      const CACHE = await caches.open(VERSION)
      await CACHE.addAll(RESOURCES)
      return self.skipWaiting()
    })()
  )
}

function deleteOldKeys(event: any) {
  event.waitUntil(
    (async () => {
      const KEYS = await caches.keys()
      KEYS.forEach(async (key) => await deleteKey(key))
      return self.clients.claim()
    })()
  )
}

async function deleteKey(key: any) {
  if (key !== VERSION) {
    await caches.delete(key)
  }
}

function fetchResources(event: any) {
  const PATHNAME = new URL(event.request.url).pathname,
        NETWORK_FIRST = NETWORK_FIRST_RESOURCES.includes(PATHNAME),
        CACHE_FIRST = [...CACHE_FIRST_RESOURCE, ...CROSS_ORIGIN_RESOURCES].includes(PATHNAME)
 
  if (NETWORK_FIRST) return event.respondWith(networkElseCache(event))
  
  if (CACHE_FIRST) return event.respondWith(cacheElseNetwork(event))

  return event.respondWith(fetch(event.request))
  
}

async function cacheElseNetwork(event: any) {
  const PATHNAME = new URL(event.request.url).pathname,
        NEW_REQUEST_URL = self.location.origin + PATHNAME,
        IS_CROSS_ORIGIN = CROSS_ORIGIN_RESOURCES.includes(PATHNAME),
        REQUEST = IS_CROSS_ORIGIN ? new Request(NEW_REQUEST_URL) : event.request
  
  const CACHED_FILE = await caches.match(REQUEST, { ignoreSearch: true })
  
  if (!CACHED_FILE) return await fetchAndCache(event)
  
  fetchAndCache(event).catch(() => { return })
  return CACHED_FILE
}

async function networkElseCache(event: any) {
  try {
    return await fetchAndCache(event)
  } catch (error) {
    return await caches.match(event.request, { ignoreSearch: true });
  }
}

async function fetchAndCache(event: any) {
  const { origin: ORIGIN, pathname: PATHNAME } = new URL(event.request.url),
        IS_ALLOWED = ALLOW_ORIGIN.includes(ORIGIN),
        IS_CROSS_ORIGIN = CROSS_ORIGIN_RESOURCES.includes(PATHNAME),
        CONFIG: RequestInit = IS_CROSS_ORIGIN ? { mode: 'no-cors' } : {}

  const RESPONSE = await fetch(event.request, CONFIG)
  
  if (RESPONSE.ok || (IS_CROSS_ORIGIN && RESPONSE && IS_ALLOWED)) {
    const CACHE = await caches.open(VERSION)
    CACHE.put(PATHNAME, RESPONSE.clone())
  }
  
  return RESPONSE
}