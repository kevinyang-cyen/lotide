const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns empty array if input array has a length of one", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns empty array if input array has a length of two", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns middle value if input array has an odd number of elements", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("returns middle two valuse if input array has an even number of elements", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

});