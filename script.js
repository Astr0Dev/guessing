let guessInput = document.getElementById("guess");
let showResult = document.getElementById("show");

let randomNumber = randomise(100);
let tries = 0;
let totaltries = 5;
const score = (tries, totaltries) => {
  let result = Math.round(100 - (tries / (totaltries + 1)) * 100);
  return result;
};

function randomise(n) {
  return Math.floor(Math.random() * n);
}

guessInput.addEventListener("change", (e) => {
  let guessedValue = parseInt(e.target.value);
  guessInput.value = "";
  tries++;
  if (tries == totaltries + 1) {
    showResult.innerHTML = `Game Over! The number was ${randomNumber}!`;
    guessInput.placeholder = "Game Over!";
    guessInput.disabled = true;
    setTimeout(() => {
      resetGame();
    }, 4000);
  } else if (randomNumber > guessedValue) {
    guessInput.placeholder = "Try higher number!";
    showResult.innerHTML = `<span id="up"> &#8593; </span> ${guessedValue}:  ${tries} of ${totaltries}`;
    console.log(e.target.value);
  } else if (randomNumber < guessedValue) {
    guessInput.placeholder = "Try lower number!";
    showResult.innerHTML = `<span id="down"> &#8595; </span> ${guessedValue}:  ${tries} of ${totaltries}`;
  } else {
    showResult.innerHTML = `Congrats! Your score: ${score(tries, totaltries)}`;
    guessInput.placeholder = `${randomNumber}`;
    guessInput.disabled = true;
    setTimeout(() => {
      resetGame();
    }, 4000);
  }
});

//reset game

function resetGame() {
  guessInput.innerHTML = "";
  guessInput.placeholder = "Guess 1 to 100!";
  randomNumber = randomise(100);
  console.log(randomNumber);
  tries = 0;
  guessInput.disabled = false;
  showResult.innerHTML = "";
}
