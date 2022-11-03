export function printMsg() {
  console.log("This is a message from the demo package");
}
// These functions are for numbers
export function randomInt(min, max) {
  // math.random generating a random number greater than min and smaller than max
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInt(1, 100));
