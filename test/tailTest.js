const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns last two elements from [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const words = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(words, ["Lighthouse", "Labs"]);
  });

  it("makes sure original array is not changed", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); 
  });

});