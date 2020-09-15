// FUNCTION IMPLEMENTATION
const head = function(list) {
  return list[0];
}


//TEST CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`🛑🛑🛑 Assertion Passed: '${actual}' !== '${expected}'`);
  }
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
