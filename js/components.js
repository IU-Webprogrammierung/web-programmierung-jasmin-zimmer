$(document).ready(function () {
  $("#footer").load("./components/footer.html", function() {
    //wechselt zu passenden Icon (abhängig von Theme)
    let footerIcon = document.querySelectorAll(".footer_icon");
    const currentTheme = localStorage.getItem("theme");
    
    replaceImage(footerIcon, currentTheme);
  });
});

$(document).ready(function () {
  let aktuelleSeite = window.location.pathname.split("/").pop();
  const header = document.querySelector("header");
  console.log(header);
  
  $("#big-header").load("./components/big-header.html", function() {
    switch (aktuelleSeite) {
      case "index.html":
        $(".header_heading").text("Hey,");
        $(".header_h2").text("ich bin Jasmin");
        $(".header_text").text("eine begeisterte Studentin mit einer Leidenschaft für Programmierung. Ich liebe es, kreative Lösungen zu entwickeln und neue Technologien zu erkunden");
        break;
      case "error.html":
        $(".header_heading").text("404");
        $(".header_h2").text("Fehler: Seite nicht gefunden");
        $(".header_text").text("Oh nein! Die von dir gesuchte Seite konnte nicht gefunden werden. Möglicherweise wurde sie entfernt, umbenannt oder ist vorübergehend nicht verfügbar.");
        break;
  }

  manageJQueryElements();
});

  $("#small-header").load("./components/small-header.html", function () {
    //lädt unterschiedliche Texte auf den Unterseiten
    switch (aktuelleSeite) {
      case "werdegang.html":
        $(".header_heading").text("Mein Werdegang");
        break;
      case "buchfavoriten.html":
        $(".header_heading").text("Meine Buchfavoriten");
        break;
      case "ueber-mich.html":
        $(".header_heading").text("Über mich");
        break;
      case "error.html":
        $(".header_heading").text("Seite nicht gefunden");
        break;
    }

    manageJQueryElements();
  });
});



function manageJQueryElements() {
  $("#hamburger-menu").on("click", () => {
    $(".nav").toggleClass("active");
    
  });    

  $("#theme-switcher").on("change", () => {
    toggleSwitch();
   
});

$(".scrollButton").on("click", () => {
    window.scrollTo({
    top: 300,
    behavior: "smooth",
    });
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
      //header styles
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.style.backgroundImage = "url(./images/dark-bg.png)";
      document.querySelector("header").style.background =
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./images/hero-darkm.jpg") center center';

      } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.style.backgroundImage = "url(./images/light-bg.png)";
      document.querySelector("header").style.background =
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./images/hero-lightm.jpg") center center';
  }
  
  const images = document.querySelectorAll("img");
  replaceImage(images, theme);
  //Bildvariante laden
  
}
  
function replaceImage(images, theme){
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
  loadTheme();  
});



