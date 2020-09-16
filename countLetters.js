// FUNCTION IMPLEMENTATION
const countLetters = function(string) {
  let stringNoSpaces = string.split(" ").join("");
  let newObject = {};
  for (const element of stringNoSpaces) {
    if (!newObject[element]) {
      newObject[element] = 1;
    } else {
      newObject[element]++;
    }
  }
  return newObject;
};

/* Test Code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const lighthouse = "lighthouse in the house";
assertEqual(countLetters(lighthouse).h, 4);
*/