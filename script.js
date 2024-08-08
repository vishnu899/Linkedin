var more = document.getElementById("more")
var less = document.getElementById("less")
var ifo = document.getElementById("ifo")

more.addEventListener("click",() =>
{
    ifo.style.display = "block"
    more.style.display = "none"
})

less.addEventListener("click",() =>
    {
        ifo.style.display = "none"
        more.style.display = "flex"
    })

    var mr = document.getElementById("mor")
var les = document.getElementById("les")
var i = document.getElementById("if")

mr.addEventListener("click",() =>
{
    i.style.display = "block"
    mr.style.display = "none"
})

les.addEventListener("click",() =>
    {
        i.style.display = "none"
        mr.style.display = "flex"
    })



    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}






