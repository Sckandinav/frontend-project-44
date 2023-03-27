import basisOfTheGame from '../index.js';
import { getRandomInt, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const makeRound = () => {
  const chekNumber = getRandomInt(1, 100);
  const question = `Question: ${chekNumber}`;
  const correctAnswer = isPrimeNumber(chekNumber).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
