function getRandomInt(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}

export default getRandomInt;
