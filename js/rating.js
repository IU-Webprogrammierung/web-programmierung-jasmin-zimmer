$(document).ready(function () {
  $(".book-info").each(function () {
    const bewertung = $(this).data("rating"); //Bewertung als Zahl

    const bewertungContainer = $('<div class="bewertung"></div>'); // Container für die Sterne

    for (let i = 1; i <= 5; i++) {
      let star; // Leerer Stern

      if (i <= Math.floor(bewertung)) {
        // Volle Sterne
        star = $('<span class="star">&#9733;</span>'); // Gefüllter Stern
      } else if (i === Math.ceil(bewertung)) {
        // Halber Stern
        star = $('<span class="star half">&#11242;</span>'); // Leerer Stern für den halben
      } else {
        // Leere Sterne
        star = $('<span class="star">&#9734;</span>'); // Leerer Stern
      }
      bewertungContainer.append(star); // Stern zum Container hinzufügen
    }

    $(this).append(bewertungContainer);
  });
});
