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

    $("#hamburger-menu").on("click", () => {
      $(".nav").toggleClass("active");
      console.log("Hamburger-Menü geklickt!");
    });

    //Tasturgesteuerter Themewechsel für Unterseiten
    $("#theme-switcher").on("change", () => {
      toggleSwitch();
      console.log("switch");
    });
  });
});

//Mobiles Menu
const mobileMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav");

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

//behält Nutzer im Overlay bis zum Schließen

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
  const sliderContainer = document.querySelector(".slideshow-container");

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

//Buchfilterung
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".book-filter").forEach((button) => {
    button.addEventListener("click", function () {
      //ausgewählte Kategorie
      const category = this.getAttribute("book-categorie");
      filterBooks(category);
    });
  });
});

function filterBooks(category) {
  const books = document.querySelectorAll(".card");

  books.forEach((book) => {
    //blendet Bücher ein oder aus
    if (category === "all" || book.classList.contains(category)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}

function toggleSwitch() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    setTheme("light");
  } else if (currentTheme === "light") {
    setTheme("dark");
  }
}

//Seitenübergreifer Themewechsel
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.style.backgroundImage = "url(./images/dark-bg.png)";
    document.querySelector("header").style.background =
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/hero-darkm.jpg") center center';
  } else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.style.backgroundImage = "url(./images/light-bg.png)";
    document.querySelector("header").style.background =
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/hero-lightm.jpg") center center';
  }

  const images = document.querySelectorAll("img");

  //Bildvariante laden
  images.forEach((img) => {
    let url = img.src;
    let newUrl;

    if (theme === "light") {
      newUrl = url.replace("darkm", "lightm");
    } else {
      newUrl = url.replace("lightm", "darkm");
    }

    img.src = newUrl;
  });
}

function loadTheme() {
  let savedTheme = localStorage.getItem("theme") || "dark";

  setTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  //Tasturgesteuerter Themewechsel für Homepage
  const inputToggle = document.querySelector(".toggle-checkbox ");

  if (inputToggle) {
    inputToggle.addEventListener("change", () => {
      toggleSwitch();
    });
  }

  loadTheme();
});
