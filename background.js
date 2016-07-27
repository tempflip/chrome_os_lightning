
var myWin = null;

chrome.app.runtime.onLaunched.addListener(function() {
  

  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 300,
      'height': 300,
      'left': 0,
      'top': 0
    }
  });

  /*chrome.app.window.create('sandboxed.html', {
    'bounds': {
      'width': 400,
      'height': 400,
      'left': 400,
      'top': 0
    }, 
  }, function(win) {
       myWin = win;
       myWin.contentWindow.postMessage('Just wanted to say hey.', '*');
     }
   );*/


   /*
   var sandboxWin = window.open("sandboxed.html","SANDBOXED!","height=800,width=500"); 
   console.log(sandboxWin);

   sandboxWin.contentWindow.postMessage("messageIt works!!", "*");
	*/

	var messageHandler = function(event) {
	  console.log('BACK:', event);
	};
	window.addEventListener('message', messageHandler);
	
	window.postMessage('MSG TO BACK', '*');

  console.log(window);
});