var slideIndex = 1;

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

const button = document.querySelector('#toggleButton');
const amokButton = document.querySelector('#toggleAmok');
const shelterButton = document.querySelector('#toggleShelter');
const content = document.querySelector('.hide');
const contentShelter = document.querySelector('.hideShelter');
const contentAmok = document.querySelector('.hideAmok');
const navButton = document.querySelector('#navButton');
const navContent = document.querySelector('.hideNav');

navButton.addEventListener('click', function(){
    navContent.classList.toggle('show');
});

button.addEventListener('click', function(){
  content.classList.toggle('show');
});

amokButton.addEventListener('click', function(){
    contentAmok.classList.toggle('show');
  });

  shelterButton.addEventListener('click', function(){
    contentShelter.classList.toggle('show');
  });

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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