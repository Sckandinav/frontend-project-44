import basisOfTheGame from '../index.js';

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
      return console.log(`Chek yours operation '${operation}'!`);
  }
};
const makeRound = () => {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * number1);
  const operator = mathematicalOperations[Math.floor(Math.random() * 3)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
