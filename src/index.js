import {
  colorLetters,
  lowercaseLettersArr,
  lettersArr,
  numbersArr,
  specialCharArr,
} from "../lib/lib.js";

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
  let randLetter =
    lowercaseLettersArr[randomInt(0, lowercaseLettersArr.length)];

  if (isUppercase === false) {
    return randLetter;
  } else if (isUppercase === true) {
    return randLetter.toUpperCase();
  } else {
    console.error(
      "Please check isUppercase value. It should be a boolean or empty."
    );
  }
}

export function randomString(
  length,
  hasNumbers = false,
  hasSpecialChar = false
) {
  let arrOfArr = [lettersArr, numbersArr, specialCharArr];

  // arrOfArr[randomInt(0, arrOfArr.length)][randomInt(0, arrOfArr.length)];

  let string = "";

  if (hasNumbers === false && hasSpecialChar === false) {
    for (let i = 0; i < length; i++) {
      string += arrOfArr[0][randomInt(0, arrOfArr[0].length)];
    }
  } else if (hasNumbers === true && hasSpecialChar === false) {
    for (let i = 0; i < length; i++) {
      let randNumber = randomInt(0, 2);
      string += arrOfArr[randNumber][randomInt(0, arrOfArr[randNumber].length)];
    }
  } else if (hasNumbers === true && hasSpecialChar === true) {
    for (let i = 0; i < length; i++) {
      let randNumber = randomInt(0, 3);
      string += arrOfArr[randNumber][randomInt(0, arrOfArr[randNumber].length)];
    }
  } else if (hasNumbers === false && hasSpecialChar === true) {
    for (let i = 0; i < length; i++) {
      let randNumber = randomBool() ? 0 : 2;
      string += arrOfArr[randNumber][randomInt(0, arrOfArr[randNumber].length)];
    }
  } else {
    console.error(
      "Please check hasSpecialChar value. It should be a boolean or empty."
    );
  }

  return string;
}

// export function randromPassword() {
// }

console.log(randomLetter(true));

/*
random int ✅
random float ✅
coin flip ✅
random array
random array
random object


*/
