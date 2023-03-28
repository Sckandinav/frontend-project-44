import basisOfTheGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomInt(0, 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
