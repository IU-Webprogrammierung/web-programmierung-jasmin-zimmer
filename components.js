$(document).ready(function () {
  $("#footer").load("./components/footer.html");
});

document.addEventListener("DOMContentLoaded", () => {
  const buchcontainer = document.getElementById("buchcontainer");
  const buecher = document.querySelectorAll(".card");
  const overlay = document.querySelector(".book-overlay");

  let aktuellesBuch;
  let author;
  let title;
  let keyword;
  let description;
  let image;

  if (buchcontainer) {
    //angeklicktes Element finden
    buecher.forEach((buch) => {
      buch.addEventListener("click", (event) => {
        //angeklicktes Buch Buch
        aktuellesBuch = event.currentTarget;

        author = buch.querySelector(".book-author").innerHTML;
        title = buch.querySelector(".book-title").innerHTML;
        if (buch.querySelector(".book-keywords")) {
          keyword = buch.querySelector(".book-keywords").innerHTML;
        } else {
          keyword = "";
        }

        description = buch.querySelector(".hidden-klappentext").innerHTML;
        image = buch.querySelector(".book-image").getAttribute("src");

        overlay.innerHTML = `
        <img
            src="./images/icon-close-darkm.png"
            class="close"
          onclick="closeOverlay()"
          />
          
          <figure class="book-cover">
          <img src="${image}"  alt=""
              class="book-image" />
          </figure>
          <div class="overlay-info">
            <h4 class="book-title">${title}</h4>
            <p class="book-keywords">${keyword}</p>
            <p class="small book-author">${author}</p>
          </div>
          <p>${description}</p>
        `;

        overlay.style.display = "grid";
        buchcontainer.style.filter = "blur(3px)";
      });
    });
  } else {
    console.error("Das Element 'buchcontainer' wurde nicht gefunden.");
  }
});

function closeOverlay() {
  console.log("close");
  const overlay = document.querySelector(".book-overlay");
  const buchcontainer = document.getElementById("buchcontainer");

  overlay.style.display = "none";
  buchcontainer.style.filter = "";
}

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
/*const mobileMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
*/
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
  // currentSlide.style.display = "block";
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

//Klappentext overlay

document.addEventListener("DOMContentLoaded", () => {
  const buchcontainer = document.querySelector(".book-cover");

  buchcontainer.addEventListener("click", (event) => {
    const currentTarget = event.currentTarget.tagName;
    console.log("click");
  });
});
