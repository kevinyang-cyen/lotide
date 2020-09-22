const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

let lighthouse = "lighthouse in the house";
let result = letterPositions(lighthouse);

describe("#letterPositions", () => {

  it("returns [3, 5, 15, 18] for 'h' when looking in 'lighthouse in the house'", () => {
    assert.deepEqual(result.h, [3, 5, 15, 18]);
  });

  it("returns [0] for 'l' in 'lighthouse in the house'", () => {
    assert.deepEqual(result.l, [0]); 
  });

});