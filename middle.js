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

module.exports = middle;