const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.style.display = "none";

    mobileMenuHandler();
})


// HANDLING MOBILE MENU
const mobileMenuHandler = () => {
    const hamburgerMenu = document.querySelector(".hmaburger-menu-container .hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-btn");
    
    hamburgerMenu.addEventListener("click", () => {
        showMobileMenu();
    })
    
    closeBtn.addEventListener("click", () => {
        hideMobileMenu();
    })
    
    
    const showMobileMenu = () => {
        mobileMenu.classList.remove("hide-mobile-menu");
        mobileMenu.classList.add("display-mobile-menu");
    }
    
    const hideMobileMenu = () => {
        mobileMenu.classList.remove("display-mobile-menu");
        mobileMenu.classList.add("hide-mobile-menu");
    }
}


