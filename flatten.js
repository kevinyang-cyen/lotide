const flatten = function(nestedArray) {
  let newArray = [];
  for (const element of nestedArray) {
    if (Array.isArray(element)){
      for (const item of element) {
        newArray.push(item);
      }
    }
    else {
      newArray.push(element);
    }
  }
  return newArray;
}

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([]), []);
*/