import basisOfTheGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const progression = (firstNumber, arrLenght, incrementNumber, questionPosition) => {
  const rezult = [];
  let startNumber = firstNumber;
  for (let i = 0; i < arrLenght; i += 1) {
    if (i === questionPosition) {
      rezult.push('..');
      startNumber += incrementNumber;
    } else {
      rezult.push(startNumber);
      startNumber += incrementNumber;
    }
  }
  return rezult.join(' ');
};

const makeRound = () => {
  const arrLenght = getRandomInt(5, 11);
  const questionPosition = getRandomInt(0, arrLenght);
  const firstNumber = getRandomInt(1, 100);
  const incrementNumber = getRandomInt(1, 20);
  const question = progression(firstNumber, arrLenght, incrementNumber, questionPosition);
  const correctAnswer = (questionPosition * incrementNumber + firstNumber).toString();
  return [question, correctAnswer];
};

export default () => {
  basisOfTheGame(description, makeRound);
};
