// ! ELABORAZIONE

// # RACCOLTA DATI

// recupero elementi pagina
const baseRandomNums = document.getElementById("random-nums");


// preparo variabile array numeri generati
let numbersGenerated = [];
// parametro max 
const numMax = 99;

// # PROGRAMMA

// funzione che genera un numero casuale
function generateRandomNumbers(max) {
  return Math.ceil(Math.random() * max);
}

// funzione che stampa in pagina 5 numeri casuali
const stampRandomNums = () => {
  for (let i = 0; i < 5; i++) {
    // genero 5 numeri random
    const genNum = generateRandomNumbers(numMax);
    // inserisco numeri generati nell'array
    numbersGenerated.push(genNum);
  }

  // stampo in pagina i numeri
  baseRandomNums.innerText = numbersGenerated.join(" || ");
};

stampRandomNums()


// | DEBUG CONSOLE LOG
console.log(numbersGenerated);
