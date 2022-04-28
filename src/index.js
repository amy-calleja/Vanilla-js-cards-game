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
const cardsChosen = []


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

function flipCard() {
    let cardId = this.getAttribute('data-id')
   
    cardsChosen.push(cardArray[cardId].name)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
}