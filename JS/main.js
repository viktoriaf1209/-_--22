document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body"), 
          burger = document.querySelector(".burger"),
          navbar = document.querySelector(".navbar"),
          menu = document.querySelector(".menu"),
          close = document.querySelector(".menu-close"),
          menuItem = document.querySelectorAll(".menu-item");

    function hideMenu() {
        navbar.classList.remove("active");
        menu.classList.remove("active");
        close.classList.remove("active");
        body.style.overflow = "visible";
    }

    burger.addEventListener('click', function () {
        navbar.classList.add("active");
        menu.classList.add("active");
        close.classList.add("active");
        body.style.overflow = "hidden";
    });

    close.addEventListener('click', function () {
        hideMenu();
    });

    menuItem.forEach((el) => {
        el.addEventListener('click', () => {
            hideMenu();
        });
    });
});
