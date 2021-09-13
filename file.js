var img = document.getElementById('img');
img.setAttribute('style', 'display:none');
var noimg = document.getElementById('noimg');


function readfichier(e) {
  if(window.FileReader) {
    var file  = e.target.files[0];
    var reader = new FileReader();
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    } else {
      img.setAttribute('style', 'display:none');
      img.setAttribute('src', '');
      noimg.setAttribute('style', 'display:none;');
    }
    reader.onloadend = function (e) {
      img.setAttribute('src', reader.result);
      img.setAttribute('style', 'display:block');
      noimg.setAttribute('style', 'display:none;');
    }
  }
}

document.getElementById('my-custom-design-upload').addEventListener('change', readfichier, false);