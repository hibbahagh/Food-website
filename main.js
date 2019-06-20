var pasta = document.getElementsByClassName(".pasta");
var pizza = document.getElementsByClassName(".pizza");
var soups = document.getElementsByClassName(".soups");
var salads = document.getElementsByClassName(".salads");
var burgers = document.getElementsByClassName(".burgers");
var sandwhiches = document.getElementsByClassName(".sandwhiches");
var ice-cream = document.getElementsByClassName(".ice-cream");
var seafood = document.getElementsByClassName(".seafood");
var breakfast = document.getElementsByClassName(".breakfast");
var steak = document.getElementsByClassName(".steak");
var tacos = document.getElementsByClassName(".tacos");
// all the var that are grabbing the food inputs in html
var btn = $('submit');
btn.on("click",doSomething);
function doSomething(){
  button.toggleClass('blue');
  steak.toggleClass
}



function myFood(){
if (pasta.checked == true) {
  pasta.style.visibility = "visible";
   } else {
     pasta.style.visibility = "hidden";}
if (pizza.checked == true) {
   pizza.style.visibility = "visible";
  } else {
  pizza.style.visibility = "hidden";}

  if (soups.checked == true) {
  soups.style.visibility = "visible";
   } else {
    soups.style.visibility = "hidden";}


  if (salads.checked == true) {
   salads.style.visibility = "visible";
      } else {
    salads.style.visibility = "hidden";}

    if (burgers.checked == true) {
    burgers.style.visibility = "visible";
         } else {
        burgers.style.visibility = "hidden";}


if (sandwhiches.checked == true) {
   sandwhiches.style.visibility = "visible";
    } else {
    sandwhiches.style.visibility = "hidden";}

if (ice-cream.checked == true) {
   ice-cream.style.visibility = "visible";
  } else {
  ice-cream.style.visibility = "hidden";}

  if (seafood.checked == true) {
     seafood.style.visibility = "visible";
      } else {
     seafood.style.visibility = "hidden";}

if (breakfast.checked == true) {
    breakfast.style.visibility = "visible";
    } else {
    breakfast.style.visibility = "hidden";}

if (steak.checked == true) {
   steak.style.visibility = "visible";
   } else {
   steak.style.visibility = "hidden";}

if (tacos.checked == true) {
   tacos.style.visibility = "visible";
   } else {
   tacos.style.visibility = "hidden";}
}




var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
