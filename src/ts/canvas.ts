
function clipImage() {
    /* ckipする形を指定 */
    ctx.beginPath();
    ctx.arc(65, 65, 45, 0, Math.PI * 2, false);
    ctx.clip();

    img.onload = function() {
        ctx.drawImage(img, 98, 187, 90, 90, 20, 20, 90, 90);
    };
    img.src = "img/family.jpg";
}