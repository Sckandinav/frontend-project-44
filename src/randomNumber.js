function getRandomInt(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

export default getRandomInt;
