// FUNCTION IMPLEMENTATION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let newObject = {};
  for (var name in itemsToCount) {
    if (itemsToCount[name] === true) {
      for (let i = 0; i < allItems.length; i++) {
        if (name === allItems[i]) {
          if (newObject[name] === undefined) {
            newObject[name] = 1;
          } else {
            newObject[name]++;
          }
        }
      }
    }
  }
  return newObject;
}

module.exports = countOnly;
