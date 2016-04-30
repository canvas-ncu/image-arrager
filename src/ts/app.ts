// canvasの準備
var canvas = document.getElementById('drawingArea');
var ctx = canvas.getContext('2d');
 
$("#afile").onchange = function(evt){
    var files = evt.target.files;
    if(files.length == 0) return;
    var file = files[0];

    // 画像以外のファイルをはじく
    if(!file.type.match(/image/)) {
        alert('画像ファイルを選択してください。');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(evt) {
        showImage(reader.result);
    }
    reader.readAsDataURL(file);
}

// 画像表示
function showImage(src) {
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    };
    img.src = src;
}

// セレクタ
function $(id) {
    return document.querySelector(id);
}
