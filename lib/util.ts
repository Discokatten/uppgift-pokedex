export function test() {
  return "test";
}

export function getRandomInt(max: number, limit = 4) {
  for (let i = 0; i < limit; i++) {
    return Math.floor(Math.random() * max);
  }
}
