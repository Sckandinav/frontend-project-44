import basisOfTheGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findNOD = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  let rezult;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
      rezult = firstNumber;
    } else {
      secondNumber -= firstNumber;
      rezult = secondNumber;
    }
  }
  return rezult;
};

const makeRound = () => {
  const number1 = getRandomInt(0, 101);
  const number2 = getRandomInt(0, 101);
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = findNOD(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
