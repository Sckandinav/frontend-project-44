import basisOfTheGame from '../index.js';
import { getRandomInt, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomInt(0, 101);
  let correctAnswer;
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
