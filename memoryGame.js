let flippedCards = [];


const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');

const imgItems = [
    {src: "img/lolaOne.jpg"},
    {src: "img/lolaTwo.jpg"},
    {src: "img/lolaTHree.jpg"},
  ];

const imgId = ['lolaOne', 'lolaTwo', 'lolaThree'];

//All items in imgItems & imgId doubled. All items now appear twice
const doubleImgItems = imgItems.concat(imgItems);
const doubleImgId = imgId.concat(imgId);

function generateCards() {
    let counter = 0;

    while (doubleImgItems.length) {
        
        // Pick random element
        const randomIndex = Math.floor(Math.random() * doubleImgItems.length);
        const randomElement = doubleImgItems[randomIndex];
        
        // Remove element
        doubleImgItems.splice(randomIndex, 1);
        
        cards[counter].src = randomElement.src;
        counter++;
    }


}


genCards.addEventListener('click', generateCards);



for (let i = 0; i < cardCover.length; i++) {
   cardCover[i].addEventListener('click', displayCard);
   cardCover[i].addEventListener('click', checkPair);
};

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("disableClick");
}

function checkPair() {

    flippedCards.push(this);

    if (flippedCards[0].id === flippedCards[1].id) {
        matchedCards();
    } else {
        unmatchedCards();
    }
}

function matchedCards() {
    console.log('matched');
    let cardOne = flippedCards[0].children[0];
    cardOne.classList.add('matched');
    let cardTwo = flippedCards[1].children[0];
    cardTwo.classList.add('matched');

    flippedCards = [];

}

function unmatchedCards() {
    console.log('unmatched');

    let cardOne = flippedCards[0].children[0];
    cardOne.classList.add("unmatched");
    let cardTwo = flippedCards[1].children[0];
    cardTwo.classList.add("unmatched");

    setTimeout( function() {
        for (let i = 0; i < flippedCards.length; i++) {
            flippedCards[i].classList.remove("open", "disableClick");
        }
        cardOne.classList.remove("unmatched");
        cardTwo.classList.remove("unmatched");
        flippedCards = [];
    }, 1200)
}
