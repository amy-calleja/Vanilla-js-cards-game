const cardArray = [
  {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png"
  },
  {
    name: "fries",
    img: "src/images/fries.png"
  },
  {
    name: "hotdog",
    img: "src/images/hotdog.png"
  },
  {
    name: "ice-cream",
    img: "src/images/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "src/images/milkshake.png"
  },
  {
    name: "pizza",
    img: "src/images/pizza.png"
  },
  {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png"
  },
  {
    name: "fries",
    img: "src/images/fries.png"
  },
  {
    name: "hotdog",
    img: "src/images/hotdog.png"
  },
  {
    name: "src/ice-cream",
    img: "src/images/ice-cream.png"
  },
  {
    name: "milkshake",
    img: "src/images/milkshake.png"
  },
  {
    name: "pizza",
    img: "src/images/pizza.png"
  }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', 'src/images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)

    }                               
}

createBoard()

function checkMatch() {
const cards = document.querySelectorAll('#grid img')
console.log(cards)
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
      cards[cardsChosenIds[0]].setAttribute('src', 'src/images/white.png')
      cards[cardsChosenIds[1]].setAttribute('src', 'src/images/white.png')
        
      cards[cardsChosenIds[0]].removeEventListener('click', 'flipCard')
        cards[cardsChosenIds[0]].removeEventListener('click', 'flipCard')
   
        cardsWon.push(cardsChosen)
    }

    cardsChosen = []
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
   
    cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}