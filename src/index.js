export function printMsg() {
  console.log("This is a message from the demo package");
}
// These functions are for numbers
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomFloat(min, max, decimal) {
  const ran = Math.random() * (max - min) + min;
  return Math.round(ran * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

export function coinFlip() {
  const coin = Math.random();

  if (coin < 0.5) {
    return false;
  } else {
    return true;
  }
}



/*
random int ✅
random float ✅
coin flip ✅
random array
random object


*/
