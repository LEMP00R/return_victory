
var staticAssetsCacheName = 'quest-assets-v1'
var dynamicCacheName = 'quest-dynamic-v1'

self.addEventListener('install', function (event) {
    self.skipWaiting()
    event.waitUntil(
      caches.open(staticAssetsCacheName).then(function (cache) {
        cache.addAll([
            '/',
            "backend/connection.php","backend/loginFunc.php","backend/registrationFunc.php","browserconfig.xml","chunks/common.abe4.js","chunks/FAQ.7c2e.js","chunks/greeting.89da.js","chunks/lections.50bc.js","chunks/login.54de.js","chunks/map.51d3.js","chunks/profile.dac5.js","chunks/quest-progress.b3d3.js","chunks/question-answer-accordion.f5e8.js","chunks/registration.6ff0.js","chunks/vendors.2797.js","css/FAQ.56f8.css","css/lections.8e10.css","css/login.4eb2.css","css/map.0e43.css","css/profile.db00.css","css/registration.4eb2.css","css/vendors.334d.css","index.html","main.120c.js","manifest.json","static/favicon/android-icon-144x144.png","static/favicon/android-icon-192x192.png","static/favicon/android-icon-36x36.png","static/favicon/android-icon-48x48.png","static/favicon/android-icon-72x72.png","static/favicon/android-icon-96x96.png","static/favicon/apple-icon-114x114.png","static/favicon/apple-icon-120x120.png","static/favicon/apple-icon-144x144.png","static/favicon/apple-icon-152x152.png","static/favicon/apple-icon-180x180.png","static/favicon/apple-icon-57x57.png","static/favicon/apple-icon-60x60.png","static/favicon/apple-icon-72x72.png","static/favicon/apple-icon-76x76.png","static/favicon/apple-icon-precomposed.png","static/favicon/apple-icon.png","static/favicon/favicon-16x16.png","static/favicon/favicon-32x32.png","static/favicon/favicon-96x96.png","static/favicon/favicon.ico","static/favicon/ms-icon-144x144.png","static/favicon/ms-icon-150x150.png","static/favicon/ms-icon-310x310.png","static/favicon/ms-icon-70x70.png","static/fonts/rubik_500/rubik-v8-cyrillic-500.eot","static/fonts/rubik_500/rubik-v8-cyrillic-500.svg","static/fonts/rubik_500/rubik-v8-cyrillic-500.ttf","static/fonts/rubik_500/rubik-v8-cyrillic-500.woff","static/fonts/rubik_500/rubik-v8-cyrillic-500.woff2","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.eot","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.svg","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.ttf","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.woff","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.woff2","static/icons/books.png","static/icons/direction.png","static/icons/faq_hover.png","static/icons/faq.png","static/icons/help.png","static/icons/home_hover.png","static/icons/home.png","static/icons/leaflet.png","static/icons/lections_hover.png","static/icons/lections.png","static/icons/logo.png","static/icons/map_hover.png","static/icons/map.png","static/icons/profile_hover.png","static/icons/profile.png","static/icons/reward.png","static/icons/work.png","static/images/idea.png","static/images/rocket.svg"
        ]
        )
      }).catch((error) => {
        console.log('Error caching static assets:', error)
      })
    )
  })

  self.addEventListener('activate', function (event) {
    if (self.clients && clients.claim) {
      clients.claim()
    }
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.filter(function (cacheName) {
            return cacheName !== staticAssetsCacheName
          })
          .map(function (cacheName) {
            return caches.delete(cacheName)
          })
        ).catch((error) => {
            console.log('Some error occurred while removing existing cache:', error)
        })
      }).catch((error) => {
        console.log('Some error occurred while removing existing cache:', error)
    }))
  })

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request)
          .then((fetchResponse) => {
              return cacheDynamicRequestData(dynamicCacheName, event.request.url, fetchResponse.clone())
          }).catch((error) => {
            console.log(error)
          })
      }).catch((error) => {
        console.log(error)
      })
    )
  })

  function cacheDynamicRequestData(dynamicCacheName, url, fetchResponse) {
    return caches.open(dynamicCacheName)
      .then((cache) => {
        cache.put(url, fetchResponse.clone())
        return fetchResponse
      }).catch((error) => {
        console.log(error)
      })
  }
