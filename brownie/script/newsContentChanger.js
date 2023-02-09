//content to change
const newsThumbnail = document.querySelector("#newsImg");
const newsAuthor = document.querySelector("#newsAuthor")
const newsDate = document.querySelector("#newsDate");
const newsTitle = document.querySelector("#newsTitle");
// arrows to swipe right and left
const newsArrowRight = document.querySelector("#newsRightArrow");
const newsArrowLeft = document.querySelector("#newsLeftArrow");

// object with the cards info
const newsCards = [
    {
      image: './assets/image/newsImg1.png',
      title: 'Most Important Days on Watchlab',
      author: 'Press',
      date: '18 SETTEMBRE 2022',
    },
    {
      image: './assets/image/newsImg2.png',
      title: ' Winner Of <br> Best Manifacture',
      author: 'Press',
      date: '23 SETTEMBRE 2022',
    }
  ];

let currentIndex = 0;

const updateNewsCard = (index) => {
  const { image, title, author, date } = newsCards[index];
  newsThumbnail.src = image;
  newsTitle.innerHTML = title;
  newsAuthor.innerHTML = author;
  document.getElementById("newsDate").innerHTML = date;
};

newsArrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % newsCards.length;
  updateNewsCard(currentIndex);
});

newsArrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex + newsCards.length - 1) % newsCards.length;
  updateNewsCard(currentIndex);
});

updateNewsCard(currentIndex);
