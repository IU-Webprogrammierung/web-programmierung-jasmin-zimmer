document.addEventListener("DOMContentLoaded", () => {
  const buchcontainer = document.getElementById("buchcontainer");
  const buecher = document.querySelectorAll(".card");
  const overlay = document.querySelector(".book-overlay");
  const closeButton = document.querySelector(".close-detail");
  let bookdetails;
  let currentBookIndex;

  if (buchcontainer) {
    //angeklicktes Element finden
    buecher.forEach((buch) => {
      //Button für den EventListener finden
      let aktuellesBuch = buch.children.item(1);
      let detailbutton;
      if (aktuellesBuch.children.item(3) != null) {
        detailbutton = aktuellesBuch.children.item(3);
      } else {
        detailbutton = aktuellesBuch.children.item(2);
      }

      //overlay öffnen
      detailbutton.addEventListener("click", () => {
        if (overlay.classList.contains("hidden")) {
          addbookDetails(buch);
          showOverlay();

          currentBookIndex = Array.from(buecher).indexOf(buch);
          console.log(currentBookIndex);
        }
      });
    });
  }

  //passt die Overlay Inhalte an Buch an
  function addbookDetails(buch) {
    let author;
    let title;
    let keyword;
    let description;
    let image;
    let imageAlt;

    author = buch.querySelector(".book-author").innerHTML;
    title = buch.querySelector(".book-title").innerHTML;
    if (buch.querySelector(".book-keywords")) {
      keyword = buch.querySelector(".book-keywords").innerHTML;
    } else {
      keyword = "";
    }

    description = buch.querySelector(".hidden-klappentext").innerHTML;
    image = buch.querySelector(".book-image").getAttribute("src");
    imageAlt = buch.querySelector(".book-image").getAttribute("alt");

    bookdetails = `<figure class="book-cover">
        <img src="${image}"  alt="${imageAlt}"
            class="book-image" />
        </figure>
        <div class="overlay-info">
          <h3 class="book-title">${title}</h3>
          <p class="book-keywords">${keyword}</p>
          <p class="small book-author">${author}</p>
        </div>
        <p>${description}</p>`;
  }

  //zeigt Overlay
  function showOverlay() {
    overlay.style.display = "grid";
    overlay.classList.remove("hidden");
    closeButton.focus();
    buchcontainer.style.filter = "blur(3px)";
    overlay.insertAdjacentHTML("beforeend", bookdetails);
  }

  //Event Listener fürs Schließen
  closeButton.addEventListener("click", () => {
    hideOverlay();
    console.log("clicked");
  });

  //schließt Overlay & entfernt Inhalte
  function hideOverlay() {
    const buchcontainer = document.getElementById("buchcontainer");

    while (overlay.children.length > 1) {
      overlay.removeChild(overlay.lastChild);
    }
    overlay.style.display = "none";
    overlay.classList.add("hidden");
    buchcontainer.style.filter = "";

    //nach schließen beim passenden Buch weiter fokussieren
    let artikel = buecher.item(currentBookIndex);
    let buchinfo = artikel.children.item(1);

    if (buchinfo.children.item(4) != null) {
      button = buchinfo.children.item(3);
    } else {
      button = buchinfo.children.item(2);
    }

    button.focus();
  }
});
