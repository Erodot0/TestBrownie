const navList = document.querySelector(".nav__mobile")
const hamburgerMenu = document.querySelector(".nav__menu--hamburger")

// menu status tracker
let isClicked = false;

const menuSvg = `<svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.595459 1.25415H26.5955" stroke="white"/>
                    <path d="M0.595459 9.81714H26.5955" stroke="white"/>
                    <path d="M0.595459 18.3802H26.5955" stroke="white"/>
                </svg>`;
const crossSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.807617 1.17795L19.1924 19.5627" stroke="white"/>
                    <path d="M0.807617 19.5627L19.1924 1.17794" stroke="white"/>
                </svg>`;

hamburgerMenu.addEventListener("click", () => {
    if( isClicked === false) {
        navList.style.transform = "translateY(0%)";
        navList.style.opacity = "100%";
        hamburgerMenu.innerHTML = crossSvg;
        isClicked = !isClicked;
    } else {
        navList.style.transform = "translateY(-110%)";
        navList.style.opacity = "0%";
        hamburgerMenu.innerHTML = menuSvg;
        isClicked = !isClicked;
    }
});