import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const question = Math.floor(Math.random() * 101);
  let correctAnswer;
  question % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
  return [question, correctAnswer];
};

export default () => {
  run(description, makeRound);
};
