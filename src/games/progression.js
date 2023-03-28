import basisOfTheGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, arrLenght, incrementNumber, questionPosition) => {
  const result = [];
  let startNumber = firstNumber;
  for (let i = 0; i < arrLenght; i += 1) {
    if (i === questionPosition) {
      result.push('..');
      startNumber += incrementNumber;
    } else {
      result.push(startNumber);
      startNumber += incrementNumber;
    }
  }
  return result.join(' ');
};

const makeRound = () => {
  const arrLenght = getRandomInt(5, 11);
  const questionPosition = getRandomInt(0, arrLenght);
  const firstNumber = getRandomInt(1, 100);
  const incrementNumber = getRandomInt(1, 20);
  const question = getProgression(firstNumber, arrLenght, incrementNumber, questionPosition);
  const correctAnswer = (questionPosition * incrementNumber + firstNumber).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
