import GuessThePokemonGame from "./guessThePokemonGame.js";

let guessThePokemonGame = new GuessThePokemonGame();
let next;

function leftImageGuessCorrect() {
  let isCorrect = next.answer === 'left';
  showFeedBack(isCorrect);
}

function rightImageClickHandler() {
  let isCorrect = next.answer === 'right';
  showFeedBack(isCorrect);
}

function showFeedBack(isCorrect) {
  if (isCorrect) {
    document.getElementById("pokemon-name").innerText = "🥳"
  }
  else {
    document.getElementById("pokemon-name").innerText = "❌"
  }

  document.getElementById("image-left").onclick = null;
  document.getElementById("image-right").onclick = null;

  let timeout = setTimeout(() => {
    nextRound();
  }, 1000);
}

function nextRound() {
  next = guessThePokemonGame.getNext();
  document.getElementById("image-left").onclick = leftImageGuessCorrect;
  document.getElementById("image-right").onclick = rightImageClickHandler;
  document.getElementById("image-left").src = next.left;
  document.getElementById("image-right").src = next.right;
  document.getElementById("pokemon-name").textContent = next.name;
}

nextRound();