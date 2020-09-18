// FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false!
const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    // First check if value is an Array, since comparing two Arrays with !== will always result in a false
    if (Array.isArray(obj1[keys1[i]]) && Array.isArray(obj2[keys1[i]])) {
      if (!eqArrays(obj1[keys1[i]], obj2[keys1[i]])) {
        return false;
      }
    } else if (typeof obj1[keys1[i]] === 'object' && typeof obj2[keys1[i]] === 'object') {
      if (!eqObjects(obj1[keys1[i]], obj2[keys1[i]])) {
        return false;
      }
    } else if (obj1[keys1[i]] !== obj2[keys1[i]]) {
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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
*/