function filterProduk(kategori) {
  let items = document.querySelectorAll(".card");

  items.forEach(item => {
    if (kategori === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(kategori)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}