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
// all the var that are grabbing
//
//
// function myFood(){
// if (pasta.checked == true) {
//   pasta.addClass('show')
//   pasta.removeClass('hide')
//    } else {
//      pasta.classList.add('hide')
//      paste.classList.remove('show')
// if (pizza.checked == true) {
//   pizza.addClass('show')
//   pizza.removeClass('hide')
//    } else {
//      pizza.addClass('hide')
//      pizza.removeClass('show')}
//
//   if (soups.checked == true) {
//     soups.addClass('show')
//     soups.removeClass('hide')
//      } else {
//        soups.addClass('hide')
//        soups.removeClass('show')}
//
//
//   if (salads.checked == true) {
//     salads.addClass('show')
//     salads.removeClass('hide')
//      } else {
//        salads.addClass('hide')
//        salads.removeClass('show')}
//
//     if (burgers.checked == true) {
//       burgers.addClass('show')
//       burgers.removeClass('hide')
//        } else {
//          burgers.addClass('hide')
//          burgers.removeClass('show')}
//
// if (sandwhiches.checked == true) {
//   sandwhiches.addClass('show')
//   sandwhiches.removeClass('hide')
//    } else {
//      sandwhiches.addClass('hide')
//      sandwhiches.removeClass('show')}
//
// if (ice-cream.checked == true) {
//   ice-cream.addClass('show')
//   ice-cream.removeClass('hide')
//    } else {
//      ice-cream.addClass('hide')
//      ice-cream.removeClass('show')}
//
//   if (seafood.checked == true) {
//     seafood.addClass('show')
//     seafood.removeClass('hide')
//      } else {
//        seafood.addClass('hide')
//        seafood.removeClass('show')}
//
// if (breakfast.checked == true) {
//   breakfast.addClass('show')
//   breakfast.removeClass('hide')
//    } else {
//      breakfast.addClass('hide')
//      breakfast.removeClass('show')}
//
// if (steak.checked == true) {
//   steak.addClass('show')
//   steak.removeClass('hide')
//    } else {
//      steak.addClass('hide')
//      steak.removeClass('show')}
//
// if (tacos.checked == true) {
//   tacos.addClass('show')
//   tacos.removeClass('hide')
//    } else {
//      tacos.addClass('hide')
//      tacos.removeClass('show')}
// }

function myFunction(){
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementByClassName("soups2");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
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
