import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const basisOfTheGame = (description, makeRound) => {
  const roundQuantity = 3;
  const userName = getUserName();
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}\n${description}`);

  for (let i = 1; i <= roundQuantity; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default basisOfTheGame;
