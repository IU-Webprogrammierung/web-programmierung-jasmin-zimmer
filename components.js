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
