let flippedCards = [];


const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');
const imgArray = ['img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg','img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg'];

const imgId = ['lolaOne', 'lolaTwo', 'lolaThree','lolaOne', 'lolaTwo', 'lolaThree'];







function generateCards() {
    while (imgArray.length) {
        const randomNum = Math.floor(Math.random() * imgArray.length);
        const randomCard = imgArray[randomNum];
        const randomId = imgId[randomNum];
        const cardsTest = document.querySelectorAll('.card');
        const cardCoverTest = document.querySelectorAll('.cardCover');

        console.log(randomNum);
        imgArray.splice(randomNum, 1);
        imgId.splice(randomNum, 1);

        cards[randomNum].src = randomCard;
        cardCover[randomNum].setAttribute('id', randomId);

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


function message(x) {
    alert(x);
}