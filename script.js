let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const guessRemain = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let preGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Enter number greater than 1");
  } else if (guess > 100) {
    alert("Enter number smaller than 100");
  } else {
    preGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
  console.log(preGuess);
}
console.log(randomNumber);
function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage("You guess it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOO high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess} , `;
  guessRemain.innerHTML = `${10 - numGuess}`;
  numGuess++;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
  p.style.backgroundColor = "orange";
  p.style.padding = "5px";
  p.style.border = "1px solid black";
  p.style.borderRadius = "12px";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = "";
    guessRemain.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
