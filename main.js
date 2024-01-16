// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userInputHtml = document.querySelector("#word-input");
const palindromeBtn = document.querySelector("#isPalidrome-btn");

function isPalindrome(parola) {
  //convert string to an arr
  parola = parola.toLowerCase();

  let arrParola = Array.from(parola);
  //helper arrs and var
  let arrReverse = [];
  let arrControl = [];
  let state;
  //crea reverse arr
  for (let i = arrParola.length - 1; i >= 0; i--) {
    arrReverse.push(arrParola[i]);
  }

  //console.log(arrReverse);
  //crea un arr di controllo con valori true o false
  //basando su se arrParola e arrRevrse @ posizione i
  //sono uguali push true into arrControl
  //se no push false
  for (let i = 0; i < arrParola.length; i++) {
    if (arrParola[i] === arrReverse[i]) {
      state = true;
      arrControl.push(state);
    } else {
      state = false;
      arrControl.push(state);
    }
  }
  //se arrControl ha almeno un valore falso
  //la parola non puo essere paindrome;
  //display result in html
  if (arrControl.includes(false)) {
    resultDisplay.classList.remove("d-none");
    resultDisplay.innerHTML += `<p> La parola "${parola}" NON e palindroma</p>`;
  } else {
    resultDisplay.classList.remove("d-none");
    resultDisplay.innerHTML += `<p>La parola "${parola}" E palindroma</p>`;
  }
}
//on click si decide se la parola e palindroma
palindromeBtn.addEventListener("click", function () {
  let parolaIn = userInputHtml.value;
  //fn call
  isPalindrome(parolaIn);
});
///////////////////////////////////////////////////////////////////////////////////////////////
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//const per html elements
const pariBtn = document.querySelector("#pari");
const dispariBtn = document.querySelector("#dispari");
const userNumberInput = document.querySelector("#user-number");
const computerNumberDisplay = document.querySelector("#computer-number");
const playBtn = document.querySelector("#play-btn");
const resultDisplay = document.querySelector(".result-msg");
//vars
let state;
let userNum, computerNum;

//btns ottenere scelta utenet pari o dispari
pariBtn.addEventListener("click", function () {
  dispariBtn.classList.add("disabled");
  state = "pari";
});

dispariBtn.addEventListener("click", function () {
  pariBtn.classList.add("disabled");
  state = "dispari";
});

//fn genera numero randomico
function getComputerNum(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

//fn per sommare 2 valori
function addNumbers(n1, n2) {
  let sum = n1 + n2;
  return sum;
}

//fn pari o dispari
function pariODispari(x) {
  if (x % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
//on click
playBtn.addEventListener("click", function () {
  playBtn.classList.add("disabled");
  //risultato di random number salvato
  computerNum = getComputerNum(1, 5);
  //get user number from input
  userNum = Number(userNumberInput.value);
  //se input > 5 ristart
  if (userNum > 5) {
    alert("questo numero piu alto di 5 riprova!!");
    location.reload();
  } else {
    //display random computer number
    computerNumberDisplay.innerHTML = computerNum;
    //se la somma e pari e la scelta del user pari
    //user won display in html

    if (pariODispari(addNumbers(computerNum, userNum)) === state) {
      resultDisplay.classList.remove("d-none");
      resultDisplay.innerHTML += `<p>Hai vinto perche indovinato se il numero e pari o dispari</p>`;
      //se utente non indovina se la somma pari o dispari
      //user lost + display in html
    } else {
      resultDisplay.classList.remove("d-none");
      resultDisplay.innerHTML += `<p>Hai Perso non hai idovinato se la somma e pari o dispari</p>`;
    }
  }
});
