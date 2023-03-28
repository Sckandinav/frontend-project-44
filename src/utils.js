function getRandomInt(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}

function isEven(number) {
  return number % 2 === 0;
}

function isPrime(number) {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

export { getRandomInt, isEven, isPrime };
