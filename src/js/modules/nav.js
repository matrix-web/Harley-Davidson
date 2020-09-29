const menuIconWrapper = document.querySelector(".menu-icon-wrapper")

function mobileNavActive () {
    const menuIcon = document.querySelector(".menu-icon")
    menuIcon.classList.toggle("menu-icon-active")
}

menuIconWrapper.addEventListener("click", mobileNavActive)