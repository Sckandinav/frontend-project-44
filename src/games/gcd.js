import basisOfTheGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const NOD = (a, b) => {
  let x = a;
  let y = b;
  let rezult;
  while (x !== y) {
    if (x > y) {
      x -= y;
      rezult = x;
    } else {
      y -= x;
      rezult = y;
    }
  }
  return rezult;
};

const makeRound = () => {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  const question = `${number1} ${number2}`;
  const correctAnswer = NOD(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
