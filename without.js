// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let isSame = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isSame = true;
      }
    }
    if (isSame === false) {
      newArray.push(source[i]);
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

assertArraysEqual(without([1,2,3],[1,2]), [3]);
assertArraysEqual(without([],[1]), []);
assertArraysEqual(without([1,'2','3'],[1,2]), ['2','3']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
