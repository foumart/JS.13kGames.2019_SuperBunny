var version = 'v1'
this.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(version).then(cache => {
			return cache.addAll([
				'index.html'
			])
		})
	)
})
this.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(resp) {
			return resp || fetch(event.request).then(function(response) {
				return caches.open(version).then(function(cache) {
					cache.put(event.request, response.clone())
					return response
				})
			})
		})
	)
})
