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
  });
});

let slides = document.getElementsByClassName("slide");
let index = 1;
//Startslide
showSlide(index);

function showSlide(n) {
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
