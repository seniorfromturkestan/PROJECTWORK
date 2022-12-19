var i=0;
var image=document.getElementById("img");
var imgs=new Array('images/leonardo.png','images/ansel.png','images/andrew.png',
'images/tobey.png','images/leonardo.png','images/ansel.png','images/andrew.png','images/tomholland.png','images/tobey.png');
document.querySelector("usa").style.transition ="1s";
function imagesrc() {
    i++;
    image.src=imgs[i];
}