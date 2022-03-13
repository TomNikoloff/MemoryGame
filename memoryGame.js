let flippedCards = [];
let moves = 0;
let counter = document.querySelector('.moves');

const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');

const imgItems = [
    {src: "img/lolaOne.jpg"},
    {src: "img/lolaTwo.jpg"},
    {src: "img/lolaTHree.jpg"},
    {src: "img/lolaFour.jpg"},
    {src: "img/lolaFive.jpg"},
    {src: "img/lolaSix.jpg"},
    {src: "img/lolaSeven.jpg"},
    {src: "img/lolaEight.jpg"},
    {src: "img/lolaNine.jpg"},
    {src: "img/lolaTen.jpg"},
    {src: "img/lolaEleven.jpg"},
    {src: "img/lolaTwelve.jpg"},
  ];

const imgId = ['lolaOne', 'lolaTwo', 'lolaThree', 'lolaFour', 'lolaFive', 'lolaSix', 'lolaSeven', 'lolaEight', 'lolaNine', 'lolaTen', 'lolaEleven', 'lolaTwelve'];

//All items in imgItems & imgId doubled. All items now appear twice
let doubleImgItems = imgItems.concat(imgItems);
let doubleImgId = imgId.concat(imgId);


//Cards shuffled on page refresh
document.body.onload = startGame();


function startGame() {
    let shuffleCounter = 0;

    while (doubleImgItems.length) {
        
        // Pick random element
        const randomIndex = Math.floor(Math.random() * doubleImgItems.length);
        const randomCard = doubleImgItems[randomIndex];
        const randomCardCover = doubleImgId[randomIndex];
        
        // Remove element
        doubleImgItems.splice(randomIndex, 1);
        doubleImgId.splice(randomIndex, 1);
        
        cards[shuffleCounter].src = randomCard.src;
        cardCover[shuffleCounter].setAttribute('id', randomCardCover);
        shuffleCounter++;
    }
}


genCards.addEventListener('click', reset);


function reset() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute('src', '');
        cards[i].classList.remove('matched');
        cardCover[i].removeAttribute('id');
        cardCover[i].classList.remove('open', 'disableClick');
    }
    
    doubleImgItems = imgItems.concat(imgItems);
    doubleImgId = imgId.concat(imgId);
    moves = 0;
    counter.textContent = 0;
    second = 0;
    minute = 0;
    hour = 0;
    timer.textContent = "0 Mins 0 Secs";
    clearInterval(interval);
    startGame();
}

for (let i = 0; i < cardCover.length; i++) {
   cardCover[i].addEventListener('click', displayCard);
   cardCover[i].addEventListener('click', checkPair);
   cardCover[i].addEventListener('click', congrats);
};

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("disableClick");
}

function checkPair() {
    flippedCards.push(this);
    let length = flippedCards.length;
    if (length === 2) {
        movesCounter();
        if (flippedCards[0].id === flippedCards[1].id) {
            matchedCards();
        } else {
            unmatchedCards();
        }
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

let second = 0,
minute = 0,
hour = 0;

function movesCounter() {
    moves++
    counter.textContent = moves;
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

let timer = document.querySelector('.timer');
let interval;

function startTimer() {
    interval = setInterval(function () {
        if (hour == 0) {
            timer.textContent = minute + " Mins " + second + " Secs";
        } else {
            timer.textContent = hour + " Hours " + minute + " Mins " + second + " Secs";
        }
        second++;
        if (second == 60) {
          minute++;
          second = 0;
        }
        if (minute == 60) {
          hour++;
          minute = 0;
        }
    }, 1000);
}

let modal = document.getElementById('modal');
let close = document.querySelector('.close');
let matches = document.getElementsByClassName('matched');
let playAgain = document.getElementById('playAgain');
let movesElement =  document.getElementById('moves');
let timeElement = document.getElementById('time');

function congrats() {
        if (matches.length == 24) {
            clearInterval(interval);
            let finalTime = timer.textContent;
    
            modal.style.display = "block";
            movesElement.textContent = "You did it in " + moves + ".";
            timeElement.textContent = "It took you " + finalTime;
    
            close.addEventListener('click', closeModal);
            playAgain.addEventListener('click', restart);
        }
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
} 

function restart() {
    closeModal();
    reset();
}

