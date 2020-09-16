// FUNCTION IMPLEMENTATION
const findKeyByValue = function (objectToSearch, item) {
  let foundKey = undefined;
  for (const property in objectToSearch) {
    if (objectToSearch[property] === item) {
      foundKey = property;
      return foundKey;
    }
  }
  return foundKey;
};

/* Test Code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  recommended: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/