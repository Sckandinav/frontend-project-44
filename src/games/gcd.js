import basisOfTheGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  let result;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
      result = firstNumber;
    } else {
      secondNumber -= firstNumber;
      result = secondNumber;
    }
  }
  return result;
};

const makeRound = () => {
  const number1 = getRandomInt(0, 101);
  const number2 = getRandomInt(0, 101);
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
