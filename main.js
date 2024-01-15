// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pariBtn = document.querySelector("#pari");
const dispariBtn = document.querySelector("#dispari");
const userNumberInput = document.querySelector("#user-number");
const playBtn = document.querySelector("#play-btn");

let pari = false;
let dispari = false;
let userNum, computerNum;
pariBtn.addEventListener("click", function () {
  pari = true;
  dispariBtn.classList.add("disabled");
});

dispariBtn.addEventListener("click", function () {
  dispari = true;
  pariBtn.classList.add("disabled");
});
function getComputerNum(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
function addNumbers(n1, n2) {
  let sum = n1 + n2;
  return sum;
}

playBtn.addEventListener("click", function () {
  computerNum = getComputerNum(1, 5);
  userNum = Number(userNumberInput.value);
  console.log(computerNum, userNum);
  if (addNumbers(computerNum, userNum) % 2 === 0 && pari === true) {
    console.log("you won");
  } else if (addNumbers(computerNum, userNum) % 2 !== 0 && dispari === true) {
    console.log("You won");
  } else {
    console.log(ga);
  }
});
