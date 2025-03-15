$(document).ready(function () {
  $("#footer").load("./components/footer.html");
});

$(document).ready(function () {
  $("#header").load("./components/header.html", function () {
    let aktuelleSeite = window.location.pathname.split("/").pop();

    console.log(aktuelleSeite);

    switch (aktuelleSeite) {
      case "werdegang.html":
        $(".header-heading").text("Mein Werdegang");
        break;
      case "buchfavoriten.html":
        $(".header-heading").text("Meine Buchfavoriten");
        break;
      case "ueber-mich.html":
        $(".header-heading").text("Über mich");
        break;
    }

    $("#hamburger-menu").on("click", function () {
      $(".nav").toggleClass("active");
      console.log("Hamburger-Menü geklickt!");
    });
  });
});

//Mobiles Menu
const mobileMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

let slides = document.querySelectorAll(".slide");
let index = 1;
//Startslide
showSlide(index);

function showSlide() {
  let currentSlide = slides[index - 1];

  //rückwärts bewegen, wenn index kleiner als Start ist
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

function navigate(n) {
  index = index + n;
  showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slideshow-container");

  console.log("fenstergröße");
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
});
