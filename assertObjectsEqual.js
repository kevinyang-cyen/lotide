// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(objectOne, objectTwo) {
  let objectOneKeys = Object.keys(objectOne);
  let objectTwoKeys = Object.keys(objectTwo);
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }
  for (let i = 0; i < objectOneKeys.length; i++) {
    // First check if value is an Array, since comparing two Arrays with !== will always result in a false
    if (Array.isArray(objectOne[objectOneKeys[i]]) && Array.isArray(objectTwo[objectOneKeys[i]])) {
      if (!eqArrays(objectOne[objectOneKeys[i]], objectTwo[objectOneKeys[i]])) {
        return false;
      }
    } else if (objectOne[objectOneKeys[i]] !== objectTwo[objectOneKeys[i]]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

/* Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const blank = {};

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(blank, cd2);
*/