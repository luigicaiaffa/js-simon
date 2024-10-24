// ! ELABORAZIONE

// # RACCOLTA DATI

// recupero elementi pagina
const gameRandomNumsBox = document.getElementById("random-nums");
const gameInputBox = document.getElementById("game-input-box");
const btnGameResult = document.getElementById("btn-end-game");

// elementi input box
const inputBoxEl1 = document.getElementById("input-el-1");
const inputBoxEl2 = document.getElementById("input-el-2");
const inputBoxEl3 = document.getElementById("input-el-3");
const inputBoxEl4 = document.getElementById("input-el-4");
const inputBoxEl5 = document.getElementById("input-el-5");

// preparo variabile array numeri generati
let numbersGenerated = [];

// preparo variabile arrau numeri inseriti dall'utente
let userInputNumbers = [];

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
    // inserisco numeri generati nell'array "numbersGenerated"
    numbersGenerated.push(genNum);
  }

  // stampo in pagina i numeri
  gameRandomNumsBox.innerText = numbersGenerated.join(" || ");
};

// funzione che fa iniziare il gioco
const gameStart = () => {
  gameRandomNumsBox.innerText = "";
  gameInputBox.classList.remove("d-none");
};

// funzione che raccoglie i numeri inseriti dall'utente
const userNumbersValue = () => {
  // valori in numero inseriti dall'utente
  const valueInput1 = parseInt(inputBoxEl1.value);
  const valueInput2 = parseInt(inputBoxEl2.value);
  const valueInput3 = parseInt(inputBoxEl3.value);
  const valueInput4 = parseInt(inputBoxEl4.value);
  const valueInput5 = parseInt(inputBoxEl5.value);

  // li inserisco nell'array "userInputNumbers"
  userInputNumbers.push(valueInput1);
  userInputNumbers.push(valueInput2);
  userInputNumbers.push(valueInput3);
  userInputNumbers.push(valueInput4);
  userInputNumbers.push(valueInput5);
  console.log(userInputNumbers);
};

// # OUTPUT

// aggiungo funzione per la fine del gioco
gameInputBox.addEventListener("submit", (e) => {
  // blocco l'evento submit
  e.preventDefault();
  // recupero i numeri inseriti dall'utente
  userNumbersValue();
});

// stampo i numeri da memorizzare in pagina
stampRandomNums();

// faccio partire il gioco dopo un timer
const startGame = setTimeout(gameStart, 1000);

// | DEBUG CONSOLE LOG
console.log(numbersGenerated);
