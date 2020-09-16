// FUNCTION IMPLEMENTATION
const middle = function(array) {
  let newArray = [];
  let arrayLength = array.length;
  let middleIndex = Math.floor(arrayLength / 2);
  if (arrayLength > 2) {
    if (arrayLength % 2 === 1) {
      newArray.push(array[middleIndex]);
    } else {
      newArray.push(array[middleIndex - 1]);
      newArray.push(array[middleIndex]);
    }
  }
  return newArray;
};



/* Test Code
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  return true;
};
*/