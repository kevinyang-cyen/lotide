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

module.exports = eqObjects;