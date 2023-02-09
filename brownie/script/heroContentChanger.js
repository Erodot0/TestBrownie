const nxtBtn = document.querySelector(".hero__nextButton");
const nxtBtnTitle = document.querySelector(".hero__nextButton--title");
const nxtBtnBg = document.querySelector(".hero__nextButton--bg");
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".heroTitle");

// click counter
let clickCounter = 0;

// background style
const heroStyles = {
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
};

// bg and title variable that will change depending on the click
let img;
let title;
let nextImg;
let nextTitle;

// this function will replace the img and the title of the hero and nxtBtn
function changeHeroAndButton(currentBackgroundImg, currentTitle, nextBackgroundImg, nextTitle) {
  hero.style.background = `url(${currentBackgroundImg})`;
  Object.assign(hero.style, heroStyles);
  heroTitle.style.transition = "all 0.3s ease-in-out";
  heroTitle.style.transform = "translateX(-5%)";
  heroTitle.style.opacity = 0;
  heroTitle.style.transform = "translateX(5%)";

  setTimeout(() => {
    heroTitle.style.transform = "translateX(0%)";
    heroTitle.style.opacity = 1;
    heroTitle.innerHTML = currentTitle;
  }, 150);

  nxtBtnBg.src = nextBackgroundImg;
  nxtBtnTitle.innerHTML = nextTitle;
}

// on next btn click the content will change depending on the clicks
nxtBtn.addEventListener("click", () => {
  clickCounter++;

  // using switch in case we want to add more slides in the future
  switch (clickCounter % 2) { // change the case numbers if more are added
    case 1:
      img = "../assets/image/mobileBgHero2.png";
      title = "The Path to Success <br> with Watchlab";
      nextImg = "../assets/image/mobileBgHero1.png";
      nextTitle = "New Selection <br> Of Henry London";
      changeHeroAndButton(img, title, nextImg, nextTitle);
      break;
    // add other cases here below before case 0

    case 0:
      img = "../assets/image/mobileBgHero1.png";
      title = "New Selection <br> Of Henry London";
      nextImg = "../assets/image/mobileBgHero2.png";
      nextTitle = "The Path to Success <br> with Watchlab";
      changeHeroAndButton(img, title, nextImg, nextTitle);
      break;
  }
});
