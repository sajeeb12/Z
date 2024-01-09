// let greet = ["Hello", "my","name", "is","Sajeeb" ]
// let greetingEl = document.querySelector("#greeting-el")
// for(let i = 0 ; i< greet.length; i++){
//     greetingEl.textContent += greet[i] + " "
// }

/*let person = {
    name1 : "Sajeeb Molla",
    age : 24,
    country : "Bangladesh",
    logData : function(){
        console.log(`${this.name1} is ${this.age} years old and lives in ${this.country}`)
    }
}

person.logData()*/

/*let hands = ['rock', 'paper', 'scissor']

random = function(){
    let x = Math.floor(Math.random()*3)
    console.log(x)
    return hands[x]
}
console.log(random())*/

let fruit = ['🍎','🍊','🍎','🍎','🍊']

let apple = document.querySelector('#apple')
let orange = document.querySelector('#orange')

function shelf(){
    for(let i = 0; i< fruit.length; i++){
        if(fruit[i]==='🍎'){
            apple.textContent+= '🍎'
        }
        else{
            orange.textContent += '🍊'
        }
    }
}
shelf()
