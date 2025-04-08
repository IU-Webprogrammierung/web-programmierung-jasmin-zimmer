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