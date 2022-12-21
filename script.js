//event listeners
let guessInput = document.getElementById("guess");
let showResult = document.getElementById("show");

//initial variables
let randomNumber = randomise(100);
let tries = 0;
let totaltries = 5;

//score function
const score = (tries, totaltries) => {
  let result = Math.round(100 - ((tries - 1) / totaltries) * 100);
  return result;
};

function randomise(n) {
  return Math.floor(1 + Math.random() * (n - 1));
}

//Guessing function
guessInput.addEventListener("change", (e) => {
  let guessedValue = parseInt(e.target.value);
  guessInput.value = "";
  tries++;
  if (guessedValue < 1 || guessedValue > 100) {
    guessInput.placeholder = "Out of range!";
    setTimeout(() => {}, 1000);
    tries--;
  } else if (randomNumber === guessedValue) {
    showResult.innerHTML = `Congrats! Your score: ${score(tries, totaltries)}`;
    guessInput.placeholder = `${randomNumber}`;
    guessInput.disabled = true;
    setTimeout(() => {
      resetGame();
    }, 4000);
  } else if (tries == totaltries) {
    showResult.innerHTML = `Game Over! The number was ${randomNumber}!`;
    guessInput.placeholder = "Game Over!";
    guessInput.disabled = true;
    setTimeout(() => {
      resetGame();
    }, 4000);
  } else if (randomNumber > guessedValue) {
    guessInput.placeholder = "Try higher number!";
    showResult.innerHTML = `<span id="up"> &#8593; </span> ${guessedValue}:  ${tries} of ${totaltries}`;
  } else if (randomNumber < guessedValue) {
    guessInput.placeholder = "Try lower number!";
    showResult.innerHTML = `<span id="down"> &#8595; </span> ${guessedValue}:  ${tries} of ${totaltries}`;
  }
});

//Reset the Game
function resetGame() {
  guessInput.innerHTML = "";
  guessInput.placeholder = "Guess 1 to 100!";
  randomNumber = randomise(100);
  tries = 0;
  guessInput.disabled = false;
  showResult.innerHTML = "";
  guessInput.focus();
}
