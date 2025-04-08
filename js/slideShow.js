let slides = document.querySelectorAll(".slide");
let index = 1;
//Startslide
showSlide(index);

function showSlide() {
  let currentSlide = slides[index - 1];
  if (currentSlide) {
    if (index <= 0) {
      index = slides.length;
      currentSlide = slides[index - 1];
    }

    //von vorn anfang, nach einem kompletten Durchlauf
    if (index > slides.length) {
      index = 1;
      currentSlide = slides[index + 1];
    }

    for (i = 0; i < slides.length; i++) {
      if (slides[i] != currentSlide) {
        slides[i].style.display = "none";
      }
    }
    currentSlide.style.display = "block";
  }
  //rückwärts bewegen, wenn index kleiner als Start ist
}

function navigate(n) {
  index = index + n;
  showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slideshow_container");

  if (sliderContainer) {
    function checkWindowSize() {
      if (window.innerWidth >= 640) {
        sliderContainer.classList.add("grid");
        slides.forEach((slide) => {
          slide.style.display = "block";
        });
      } else {
        sliderContainer.classList.add("carousel");
        showSlide(index);
      }
    }

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
  }
});