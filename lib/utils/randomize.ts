export function getRandomInt(max = 1000, limit = 4) {
  const randomId: number[] = [];
  for (let i = 0; i < limit; i++) {
    const id = Math.floor(Math.random() * max);
    randomId.push(id);
  }
  return randomId;
}
