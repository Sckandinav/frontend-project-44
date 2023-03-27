import basisOfTheGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What is the result of the expression?';
const mathematicalOperations = ['+', '-', '*'];

const calculate = (x, y, operation) => {
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return console.log(`Сheck yours operation '${operation}'!`);
  }
};
const makeRound = () => {
  const number1 = getRandomInt(0, 101);
  const number2 = getRandomInt(0, number1);
  const operator = mathematicalOperations[getRandomInt(0, 3)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
