import basisOfTheGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomInt(0, 101);
  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
