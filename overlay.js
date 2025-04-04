document.addEventListener("DOMContentLoaded", () => {
  const buchcontainer = document.getElementById("buchcontainer");
  const buecher = document.querySelectorAll(".card");
  const overlay = document.querySelector(".book-overlay");
  let bookdetail;

  if (buchcontainer) {
    //angeklicktes Element finden
    buecher.forEach((buch) => {
      //Button für den EventListener finden
      let detail = buch.children.item(1);
      let button;
      if (detail.children.item(3) != null) {
        button = detail.children.item(3);
      } else {
        button = detail.children.item(2);
      }

      //overlay öffnen
      button.addEventListener("click", () => {
        addbookDetails(buch);
        showOverlay();
        console.log(buch);
      });
      //Tastaturbedienung
      button.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          overlayToggle();
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

    bookdetail = `<figure class="book-cover">
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
    buchcontainer.style.filter = "blur(3px)";
    overlay.insertAdjacentHTML("beforeend", bookdetail);
  }

  //Event Listener fürs Schließen
  const closeButton = document.querySelector(".close-detail");
  closeButton.addEventListener("click", () => {
    hideOverlay();
    console.log("clicked");
  });
  closeButton.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      hideOverlay();
    }
  });

  //schließt Overlay & entfernt Inhalte
  function hideOverlay() {
    const overlay = document.querySelector(".book-overlay");
    const buchcontainer = document.getElementById("buchcontainer");

    while (overlay.children.length > 1) {
      overlay.removeChild(overlay.lastChild);
    }
    overlay.style.display = "none";
    buchcontainer.style.filter = "";
  }
});
