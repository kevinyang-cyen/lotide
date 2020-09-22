const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#letterPositions", () => {

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });

  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });

  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); 
  });

  it("returns false for [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); 
  });

});