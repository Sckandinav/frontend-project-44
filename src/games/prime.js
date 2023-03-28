import basisOfTheGame from '../index.js';
import getRandomInt from '../utils.js';

function isPrime(number) {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeRound = () => {
  const chekNumber = getRandomInt(1, 100);
  const question = `Question: ${chekNumber}`;
  const correctAnswer = (isPrime(chekNumber) ? 'yes' : 'no').toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
