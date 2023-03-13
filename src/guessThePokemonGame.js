import pokemons from "./pokemons.js";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function() {
  this.getNext = function() {
    let answerIndex = getRandomIntInclusive(0, 499);
    let wrongIndex = getRandomIntInclusive(0, 499);
    while (wrongIndex === answerIndex) {
      wrongIndex = getRandomIntInclusive(0, 499);
    }
    let baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
    let correctAnswerIsAtLeft = wrongIndex % 2 === 0;

    return {
      name: pokemons[answerIndex].name,
      answer: correctAnswerIsAtLeft ? 'left' : 'right',
      left: correctAnswerIsAtLeft ? `${baseUrl}${pokemons[answerIndex].id}.png` : `${baseUrl}${pokemons[wrongIndex].id}.png`,
      right: correctAnswerIsAtLeft ? `${baseUrl}${pokemons[wrongIndex].id}.png` : `${baseUrl}${pokemons[answerIndex].id}.png`,
    }
  }
};