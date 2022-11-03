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

export function randomArr(length, min, max, decimal = 0) {
  let arr = [];
  if (decimal === 0) {
    for (let i = 0; i < length; i++) {
      arr.push(randomInt(min, max));
    }
  } else if (decimal > 0) {
    for (let i = 0; i < length; i++) {
      arr.push(randomFloat(min, max, decimal));
    }
  } else {
    console.error("Please check decimal value. It should be a number or blank");
  }

  return arr;
}

console.log(randomArr(10, 1, 10));

/*
random int ✅
random float ✅
coin flip ✅
random array
random array
random object


*/
