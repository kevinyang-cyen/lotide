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

module.exports = findKeyByValue;