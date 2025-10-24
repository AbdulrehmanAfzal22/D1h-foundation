let currentSlide = 0;
let hamburger = document.getElementById("hamburger")
let menu = document.getElementById("menu11")
let close = document.getElementById("button1")

close.addEventListener("click", function () {
  menu.style.display = "none"
})

hamburger.addEventListener("click" , function () {
  menu.style.display = "block"
})



































const slides = document.querySelectorAll('.slide');

function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 10000); 