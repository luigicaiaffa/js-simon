// ! ELABORAZIONE

// # RACCOLTA DATI

// recupero elementi pagina
const gameRandomNums = document.getElementById("random-nums");
const gameInput = document.getElementById("game-input-user");

// elementi input box
const inputBoxEl1 = document.getElementById("input-box-1");
const inputBoxEl2 = document.getElementById("input-box-2");
const inputBoxEl3 = document.getElementById("input-box-3");
const inputBoxEl4 = document.getElementById("input-box-4");
const inputBoxEl5 = document.getElementById("input-box-5");

// preparo variabile array numeri generati
let numbersGenerated = [];

// parametro max per "generateRandomNumbers"
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
  gameRandomNums.innerText = numbersGenerated.join(" || ");
};

// funzione che fa iniziare il gioco
const gameStart = () => {
  gameRandomNums.innerText = "";
  gameInput.classList.remove("d-none");
};

// aggiungere una funzione che raccoglie i valori immessi dall'utente

// stampo i numeri da memorizzare in pagina
stampRandomNums();

// faccio partire il gioco dopo un timer
const startGame = setTimeout(gameStart, 5000);

// | DEBUG CONSOLE LOG
console.log(numbersGenerated);
