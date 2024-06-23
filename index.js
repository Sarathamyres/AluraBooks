const hamburger = document.querySelector(".icon-bars");
const cancel = document.querySelector(".div-x-menu-hamburger");
const listHamburger = document.querySelector(".list-hamburger");
const categoryLabel = document.querySelector(".category");
const checkbox = document.getElementById("category");
const iconFavorite = document.querySelector(".heart");
const iconSolid = document.querySelector(".solid-heart");
const iconFavorites = document.querySelectorAll(".heart");
const iconSolids = document.querySelectorAll(".solid-heart");

//menu-hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  if (hamburger.classList.contains("hidden")) {
    cancel.style.display = "block";
    listHamburger.style.display = "block";
  }
  cancel.addEventListener("click", () => {
    cancel.style.display = "none";
    if (cancel.style.display === "none") {
      hamburger.classList.remove("hidden");
      listHamburger.style.display = "none";
    }
  });
});

//box-category
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    categoryLabel.classList.add("color-category");
  } else {
    categoryLabel.classList.remove("color-category");
  }
});

//icons-favorite
iconFavorites.forEach(iconFavorite => {
  iconFavorite.addEventListener("click", () => {
    iconFavorites.forEach(icon => icon.classList.add("hidden"));
    iconSolids.forEach(icon => icon.classList.remove("hidden"));
  });
});

iconSolids.forEach(iconSolid => {
  iconSolid.addEventListener("click", () => {
    iconSolids.forEach(icon => icon.classList.add("hidden"));
    iconFavorites.forEach(icon => icon.classList.remove("hidden"));
  });
});
