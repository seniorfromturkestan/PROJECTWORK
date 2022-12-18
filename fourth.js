var i=0;
var image=document.getElementById("img");
var imgs=new Array('images/firstblock1.png','images/firstblock2.png', 'images/firstblock3.png');
document.querySelector("usa").style.transition ="0.4s";
function imagesrc() {
    i++;
    image.src=imgs[i];
}