console.log('viii');

req('http://pngimg.com/upload/cat_PNG100.png');

function req(imageUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl);
    xhr.responseType = 'blob';
    xhr.onload = function() {
    	console.log(xhr.response);
    }
    xhr.send();
};
