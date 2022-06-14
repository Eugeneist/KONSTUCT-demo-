const iconMenu = document.querySelector(".sticky-menu__icon");
const burgerMenu = document.querySelector(".header__nav");
const scrolldown = document.querySelector(".header__btn");

if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    burgerMenu.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(`.header__nav-link[data-goto]`);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}

function onMenuLinkClick(event) {
  const menuLink = event.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector(".header__bottom").offsetHeight;

    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      burgerMenu.classList.remove("_active");
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });

    scrolldown.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });

    event.preventDefault();
  }
}
