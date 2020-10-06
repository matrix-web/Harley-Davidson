const menuIconWrapper = document.querySelector(".menu-icon-wrapper")
const headerNav = document.querySelector(".header-nav")

function mobileNavActive () {
    const menuIcon = document.querySelector(".menu-icon")

    if (document.body.clientWidth < 992) {
        if (menuIcon.classList.contains("menu-icon-active")) {
            menuIcon.classList.remove("menu-icon-active")
            headerNav.classList.remove("header-nav--active")
        } else {
            menuIcon.classList.add("menu-icon-active")
            headerNav.classList.add("header-nav--active")
        }
    }
}

menuIconWrapper.addEventListener("click", mobileNavActive)