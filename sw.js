const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"theppemaskclub.com"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"cef31471c4e2a6dad2742e8720753b55",url:"./about/index.html"},{revision:"aedeacdee2f1d1c7968d2a4edc3f184e",url:"./categories/index.html"},{revision:"382296291373cd41459cefe3cbdf2f7b",url:"./categories/page/1/index.html"},{revision:"d64b3cb9ec04090b8a64ae39767f8073",url:"./contact/index.html"},{revision:"26e35f741976ef09c5947f4c13a21132",url:"./faq/index.html"},{revision:"1140a78b5136d5c866f196d1d1d87742",url:"./index.html"},{revision:"a3f366204f9d85ae173cf69c1a9340b5",url:"./js/script.min.js"},{revision:"a28be9056ad9468a3ec21f57f21c93df",url:"./plugins/bootstrap/bootstrap.min.css"},{revision:"c16e2f30e0e7e1b77837309a1fd2f539",url:"./plugins/bootstrap/bootstrap.min.js"},{revision:"f0930082c64a28aa9c7a6fed94c72ea6",url:"./plugins/google-map/gmap.js"},{revision:"a6cd5459b5ee45e4d9ff45ac32ee7b45",url:"./plugins/jQuery/jquery.min.js"},{revision:"ea0d69f29a16172cacd9c418429b02ee",url:"./plugins/slick/slick.css"},{revision:"18a598b672b221ec59a2294ae614a546",url:"./plugins/slick/slick.min.js"},{revision:"b3c22e9d656af05e7a728d7ce356b5bb",url:"./plugins/themify-icons/themify-icons.css"},{revision:"cb9f29b1c8d4c3be9ed11f262087e8a0",url:"./products/1-kn95/index.html"},{revision:"afc54b18e960d18ecbded75997eaffc5",url:"./products/2-disposable-3-ply-mask/index.html"},{revision:"41a59b10d4dfbfdb8ed7695b64919493",url:"./products/3-latex-glove/index.html"},{revision:"59422db8a8751415eefbfa82b3d46a92",url:"./products/4-protective-suite-with-shoe-cover/index.html"},{revision:"c68ba29ed46392ba702bedafb04689c3",url:"./products/5-protective-suite-without-cover/index.html"},{revision:"e5383248e6a5cb1cd6efc654e360ef32",url:"./products/6-nitrile-glove/index.html"},{revision:"a1e6c9a0632d994de88e9be23c8a908e",url:"./products/disposable-3-ply-mask/index.html"},{revision:"d951363d1ddf9a315a05b179597ee81b",url:"./products/index.html"},{revision:"82102b220c4205fa911bff1350942528",url:"./products/kn95/index.html"},{revision:"3d0efee149bc963a1f1d5ac717872372",url:"./scss/style.min.css"},{revision:"9f5e8b93addfc863359327bb7ebf29ee",url:"./tags/index.html"},{revision:"faff6f8a22d2c893ac342c6b8c55ac7a",url:"./tags/page/1/index.html"},{revision:"3abfb6a58aa9025932e9bcd13441b640",url:"./terms-conditions/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:js|css)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"static-resources"})),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();