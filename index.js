let player = {
    name1 : "Sajeeb",
    chips : 149
}

playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name1 + ": $" + player.chips

let cards = []
let message = ""
let sum = 0
let hasBlackJack = false
let isAlive = true

let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let messageEl = document.getElementById('element')

function getRandomCard(){
    let num =  Math.floor((Math.random()*13))+1
    if(num > 10){
        return 10
    }else if(num===1){
        return 11
    }else{
        return num
    }
}

function startGame(){
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}
function cards_el(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}
// function sum(){
//     sumEl.textContent = "Sum: "
//     for(let i = 0; i<cards.length; i++){
//         sumEl.textContent += cards[i]
//     }
// }

function renderGame(){
   
    cards_el()

    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message= "Do you want to draw a new card"
        
    }else if(sum===21){
        message= `Wohoo! You've got a BlackJack`
        hasBlackJack = true
    }
    else{
        message = `You're out of the game`
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack ===false){
        let newCard = getRandomCard()
        sum +=newCard
        cards.push(newCard)
        renderGame()
    }
    
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + newCard
}

