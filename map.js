// FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [0,2,3,4,5];
assertArraysEqual(map(words, word => word[0]) , ['g','c','t','m','t']);
assertArraysEqual(map(numbers, number => 2*number), [0,4,6,8,10]);
*/
