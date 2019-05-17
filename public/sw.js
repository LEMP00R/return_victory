
var staticAssetsCacheName = 'quest-assets-v1'
var dynamicCacheName = 'quest-dynamic-v1'

self.addEventListener('install', function (event) {
    self.skipWaiting()
    event.waitUntil(
      caches.open(staticAssetsCacheName).then(function (cache) {
        cache.addAll([
            '/',
            "backend/connection.php","backend/loginFunc.php","backend/registrationFunc.php","browserconfig.xml","chunks/common.eb41.js","chunks/FAQ.e86d.js","chunks/greeting.e9f8.js","chunks/lections.8e4b.js","chunks/login.e289.js","chunks/map.0d44.js","chunks/profile.a78a.js","chunks/quest-progress.708c.js","chunks/question-answer-accordion.931f.js","chunks/registration.9a2b.js","chunks/test.d691.js","chunks/vendors.e548.js","css/FAQ.56f8.css","css/greeting.786e.css","css/lections.8e10.css","css/login.4eb2.css","css/map.963f.css","css/profile.db00.css","css/registration.4eb2.css","css/test.a9b1.css","index.html","main.c19e.js","manifest.json","static/favicon/android-icon-144x144.png","static/favicon/android-icon-192x192.png","static/favicon/android-icon-36x36.png","static/favicon/android-icon-48x48.png","static/favicon/android-icon-72x72.png","static/favicon/android-icon-96x96.png","static/favicon/apple-icon-114x114.png","static/favicon/apple-icon-120x120.png","static/favicon/apple-icon-144x144.png","static/favicon/apple-icon-152x152.png","static/favicon/apple-icon-180x180.png","static/favicon/apple-icon-57x57.png","static/favicon/apple-icon-60x60.png","static/favicon/apple-icon-72x72.png","static/favicon/apple-icon-76x76.png","static/favicon/apple-icon-precomposed.png","static/favicon/apple-icon.png","static/favicon/favicon-16x16.png","static/favicon/favicon-32x32.png","static/favicon/favicon-96x96.png","static/favicon/favicon.ico","static/favicon/ms-icon-144x144.png","static/favicon/ms-icon-150x150.png","static/favicon/ms-icon-310x310.png","static/favicon/ms-icon-70x70.png","static/fonts/rubik_500/rubik-v8-cyrillic-500.eot","static/fonts/rubik_500/rubik-v8-cyrillic-500.svg","static/fonts/rubik_500/rubik-v8-cyrillic-500.ttf","static/fonts/rubik_500/rubik-v8-cyrillic-500.woff","static/fonts/rubik_500/rubik-v8-cyrillic-500.woff2","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.eot","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.svg","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.ttf","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.woff","static/fonts/rubik_regular/rubik-v8-cyrillic-regular.woff2","static/icons/arrow-left.svg","static/icons/arrow-right.svg","static/icons/books.png","static/icons/direction.png","static/icons/faq_hover.png","static/icons/faq.png","static/icons/finish.svg","static/icons/help.png","static/icons/home_hover.png","static/icons/home.png","static/icons/leaflet.png","static/icons/lections_hover.png","static/icons/lections.png","static/icons/location_colored.svg","static/icons/location.svg","static/icons/logo.png","static/icons/map_hover.png","static/icons/map.png","static/icons/mouse.svg","static/icons/path_colored.svg","static/icons/path.svg","static/icons/profile_hover.png","static/icons/profile.png","static/icons/reward.png","static/icons/work.png","static/images/android.png","static/images/angular.svg","static/images/asp_net.svg","static/images/c sharp.png","static/images/choose-profession.svg","static/images/go.png","static/images/html.png","static/images/idea.png","static/images/map.png","static/images/mongodb.svg","static/images/python.svg","static/images/react.png","static/images/rocket.svg","static/images/ruby_on_rails.svg","static/images/ruby.png","static/images/spring.png","static/images/spring.svg","static/images/swift.svg","static/images/unity.svg"
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
