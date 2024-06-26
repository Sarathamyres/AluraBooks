const hamburger = document.querySelector(".icon-bars");
const cancel = document.querySelector(".div-x-menu-hamburger");
const listHamburger = document.querySelector(".list-hamburger");
const categoryLabel = document.querySelector(".category");
const checkbox = document.getElementById("category");
const iconFavorite = document.querySelector(".heart");
const iconSolid = document.querySelector(".solid-heart");
const iconFavorites = document.querySelectorAll(".heart");
const iconSolids = document.querySelectorAll(".solid-heart");
const arrows = document.querySelectorAll(".arrow");
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll(".item-img");

const carouselContainertwo = document.querySelector('.carousel-container2');
const arrowstwo = document.querySelectorAll(".arrow2");

// Defina a largura do primeiro item do carrossel após carregar a página
window.addEventListener('load', () => {
  const firstCardWidth = carouselItems[0].clientWidth + 20; // 20px é o gap entre os itens

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.id === "left") {
        carouselContainer.scrollLeft -= firstCardWidth;
      } else {
        carouselContainer.scrollLeft += firstCardWidth;
      }
    });
  });
});

window.addEventListener('load', () => {
  const firstCardWidth = carouselItems[0].clientWidth + 20; // 20px é o gap entre os itens

  arrowstwo.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.id === "left2") {
        carouselContainertwo.scrollLeft -= firstCardWidth;
      } else {
        carouselContainertwo.scrollLeft += firstCardWidth;
      }
    });
  });
});

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
iconFavorites.forEach((iconFavorite) => {
  iconFavorite.addEventListener("click", () => {
    iconFavorites.forEach((icon) => icon.classList.add("hidden"));
    iconSolids.forEach((icon) => icon.classList.remove("hidden"));
  });
});

iconSolids.forEach((iconSolid) => {
  iconSolid.addEventListener("click", () => {
    iconSolids.forEach((icon) => icon.classList.add("hidden"));
    iconFavorites.forEach((icon) => icon.classList.remove("hidden"));
  });
});
