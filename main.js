// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userInputHtml = document.querySelector("#word-input");
const palindromeBtn = document.querySelector("#isPalidrome-btn");

function isPalindrome(parola) {
  let arrParola = Array.from(parola);
  let arrReverse = [];
  let arrControl = [];
  let state;

  for (let i = arrParola.length - 1; i >= 0; i--) {
    arrReverse.push(arrParola[i]);
  }

  console.log(arrReverse);
  for (let i = 0; i < arrParola.length; i++) {
    if (arrParola[i] === arrReverse[i]) {
      state = true;
      arrControl.push(state);
    } else {
      state = false;
      arrControl.push(state);
    }
  }
  if (arrControl.includes(false)) {
    resultDisplay.classList.remove("d-none");
    resultDisplay.innerHTML += `<p>La parola NON e palindroma</p>`;
  } else {
    resultDisplay.classList.remove("d-none");
    resultDisplay.innerHTML += `<p>Questa parola E palindroma</p>`;
  }
}

palindromeBtn.addEventListener("click", function () {
  let parolaIn = userInputHtml.value;
  isPalindrome(parolaIn);
});
///////////////////////////////////////////////////////////////////////////////////////////////
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pariBtn = document.querySelector("#pari");
const dispariBtn = document.querySelector("#dispari");
const userNumberInput = document.querySelector("#user-number");
const computerNumberDisplay = document.querySelector("#computer-number");
const playBtn = document.querySelector("#play-btn");
const resultDisplay = document.querySelector(".result-msg");

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
  playBtn.classList.add("disabled");
  computerNum = getComputerNum(1, 5);
  userNum = Number(userNumberInput.value);
  computerNumberDisplay.innerHTML = computerNum;
  if (addNumbers(computerNum, userNum) % 2 === 0 && pari === true) {
    resultDisplay.classList.remove("d-none");
    resultDisplay.innerHTML += `<p>Hai vinto perche la somma dei due numeri e pari</p>`;
  } else if (addNumbers(computerNum, userNum) % 2 !== 0 && dispari === true) {
    resultDisplay.classList.remove("d-none");
    resultDisplay.innerHTML += `<p>Hai vinto perche la somma dei due numeri e dispari</p>`;
  } else {
    resultDisplay.classList.remove("d-none");

    resultDisplay.innerHTML += `<p>Hai Perso non hai idovinato se la somma e pari o dispari</p>`;
  }
});
