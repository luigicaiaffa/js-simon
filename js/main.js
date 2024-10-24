// ! ELABORAZIONE

// # RACCOLTA DATI

// recupero elementi pagina
const inputNumberEl1 = document.getElementById("input-num-1")
const inputNumberEl2 = document.getElementById("input-num-2")
const inputNumberEl3 = document.getElementById("input-num-3")
const inputNumberEl4 = document.getElementById("input-num-4")
const inputNumberEl5 = document.getElementById("input-num-5")

// # PROGRAMMA

// funzione che genera numeri casuali
const generateRandomNumbers = (max) => {
  return Math.ceil(Math.random() * max);
};

