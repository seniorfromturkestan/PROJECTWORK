function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    let hel = document.querySelector('.plar');
    hel.style.transition="0.5s";

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
      hel.style.height="80px"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "x";
      moreText.style.display = "inline";
      hel.style.height="285px";

    }
  }