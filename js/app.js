// Pari e Dispari


// chiedere all'utente "pari o dispari?"
let userChoice = prompt("Pari o dispari?");
console.log(userChoice)


// chiedere all'utente il numero che vuole inserire
let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("il giocatore sceglie:" + " " + userNum)


// invocare la funzione per generare il numero random del pc
let pcNum = pcRandomNumber(1,5); 
console.log("il computer sceglie:" + " " + pcNum)


// invocare la funzione per stabilire se il risultato della somma dei numeri scelti dai giocatori è pari o dispari 
let sumNumPlayers = isOddOrEven(pcNum,userNum)



function isOddOrEven(pcNum, userNum){
    const sum = pcNum + userNum; 

    if(sum % 2 === 0){
        console.log("ha vinto il pari!")
        return true
    } else {
        console.log("ha vinto il dispari!")
        return false
    }
}

function pcRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


