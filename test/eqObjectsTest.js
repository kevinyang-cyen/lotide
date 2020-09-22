const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true for equal objects", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it("returns false for objects not equal", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false); 
  });

  it("returns true for equal objects that are nested", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); 
  });

  it("returns false for not equal objects that are nested", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); 
  });

});