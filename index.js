carouselsFunction();
hamburgerFunction();
categoryFunction();
favoriteFunction();
iconHoverFunction();






function iconHoverFunction() {
  const user = document.querySelector(".li-icon-user");
  const userList = document.querySelector(".div-list-user");
  const iconColor = document.querySelector('.user-icon-item');
  const paragraphColor = document.querySelector('.paragraph-user-icon');

  user.addEventListener("mouseover", () => {
    userList.style.display = "block";
    if (userList.style.display === 'block') {
      iconColor.style.color = "orange";
      paragraphColor.style.color = 'orange';
    }
  });
  userList.addEventListener("mouseleave", () => {
    userList.style.display = "none";
    if (userList.style.display === 'none') {
      iconColor.style.color = "";
      paragraphColor.style.color = "";
    }
  });
}

function categoryFunction() {
    const category = document.querySelector(".category");
    const listCategory = document.querySelector(".div-list-category");

    category.addEventListener("mouseover", () => {
        category.classList.add("color-background");
        listCategory.style.display = "block";
    });
    listCategory.addEventListener("mouseleave", () => {
      category.classList.remove("color-background");
      listCategory.style.display = "none";
  });
}
function hamburgerFunction() {
  const hamburger = document.querySelector(".icon-bars");
  const cancel = document.querySelector(".div-x-menu-hamburger");
  const listHamburger = document.querySelector(".list-hamburger");

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
}

function favoriteFunction() {
  const iconFavorite = document.querySelector(".heart");
  const iconSolid = document.querySelector(".solid-heart");
  const iconFavorites = document.querySelectorAll(".heart");
  const iconSolids = document.querySelectorAll(".solid-heart");

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
}

function carouselsFunction() {
  const arrows = document.querySelectorAll(".arrow");
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselItems = document.querySelectorAll(".item-img");
  const carouselContainertwo = document.querySelector(".carousel-container2");
  const arrowstwo = document.querySelectorAll(".arrow2");

  window.addEventListener("load", () => {
    const firstCardWidth = carouselItems[0].clientWidth + 20; // 20px é o gap entre os itens

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        if (arrow.id === "left") {
          carouselContainer.scrollLeft -= firstCardWidth;
        } else {
          carouselContainer.scrollLeft += firstCardWidth;
        }
      });
    });
  });

  window.addEventListener("load", () => {
    const firstCardWidth = carouselItems[0].clientWidth + 20; //

    arrowstwo.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        if (arrow.id === "left2") {
          carouselContainertwo.scrollLeft -= firstCardWidth;
        } else {
          carouselContainertwo.scrollLeft += firstCardWidth;
        }
      });
    });
  });
}
