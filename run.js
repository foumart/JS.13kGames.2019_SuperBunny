if('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('serviceworker.js')
	.then(function() {
		console.log("[Game] Service Worker registered successfully");
	})
	.catch(function() {
		console.log("[Warning] Service worker registration failed")
	});
}
