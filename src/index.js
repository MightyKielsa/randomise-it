// These functions are for numbers
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomFloat(min, max, decimal) {
  const ran = Math.random() * (max - min) + min;
  return Math.round(ran * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

export function randomBool() {
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

export function randomBoolArr(length) {
  let arr = [];
  if (length > 0) {
    for (let i = 0; i < length; i++) {
      arr.push(randomBool());
    }
  } else {
    console.error(
      "Please check length value. It should be a number larger than 0"
    );
  }
  return arr;
}

export function randomColor(isRgb = false) {
  if (isRgb === false) {
    const colorLetters = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      let n = randomInt(0, colorLetters.length);
      hex += colorLetters[n];
    }
    return hex;
  } else if (isRgb === true) {
    const rgbArr = randomArr(3, 0, 255);
    return `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
  } else {
    console.error("Please check isRgb value. It should be a boolean or empty.");
  }
}

export function randomLetter(isUppercase = false) {
  const letterArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (isUppercase === false) {
  }
}

console.log(randomColor("fasdfa"));

/*
random int ✅
random float ✅
coin flip ✅
random array
random array
random object


*/
