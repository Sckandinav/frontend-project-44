import readlineSync from 'readline-sync';
import greetings from './cli.js';

const playGame = () => {
  const userName = greetings();
  console.log(`Hello, ${userName}\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const checkNumber = Math.floor(Math.random() * 101);
    const answer = readlineSync.question(`Question: ${checkNumber} `);
    let correctAnswer;
    checkNumber % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
