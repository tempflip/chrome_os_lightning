console.log('na szia');
webview = document.querySelector('#foo');


webview.addEventListener("loadstart", function() {
	console.log('start...');
});

webview.addEventListener("loadstop", function() {
	console.log('loaded');
	doSomething();
});


function doSomething() {
	webview.executeScript({ file : "js/insertCallbacks.js" }, 
		function(x) {
			console.log('pada.');
		}
	);
}
/*
console.log(window);
d.contentWindow.postMessage('na mizu?', '*');
*/