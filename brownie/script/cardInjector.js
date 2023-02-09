//wraps all the cards
const cardWrapper = document.querySelector(".collection")

// an array containing all the cards
const card = [
    // each card is object with info
    {
        thumbnail: {
            img: "./assets/image/cardImg1.png",
            alt: "house image"
        },
        preTitle: "london collection season",
        title: "Temporary Store",
        paragraph: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
    },
    {
        thumbnail: {
            img: "./assets/image/cardImg2.png",
            alt: "house image"
        },
        preTitle: "london collection season",
        title: "New Collection Henry London",
        paragraph: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
    },
]


// this function will inject the cards into the html
function createCard(image, imgAlt, pretitle, title, paragraph) {
    let code = `
        <div class="collection__card">
            <div class="collection__card--thumbnail">
            <img src="${image}" alt="${imgAlt}">
        </div>
        <div class="collection__card--body">
            <h4 class="preTitle">
                ${pretitle}
            </h4>
            <h2 class="title">
                ${title}
            </h2>
            <p class="paragraph">
                ${paragraph}
            </p>
            <button class="cardBtn">
                <a href="">View</a>
            </button>
        </div>
    </div>
    `;

    cardWrapper.innerHTML += code
}

// this will repeat that function for each object in the array
card.forEach((info) => {
    let img = info.thumbnail.img;
    let imgAlt = info.thumbnail.alt;
    let preTitle = info.preTitle;
    let title = info.title;
    let paragraph = info.paragraph;

    createCard(img, imgAlt, preTitle, title, paragraph);
})

