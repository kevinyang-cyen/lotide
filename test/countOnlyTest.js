const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {

  it("returns that Jason is found once", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined for Karima since her name is not in the Array", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });

  it("returns 2 for Fang since her name is found twice", () => {
    assert.strictEqual(result1["Fang"], 2); 
  });

});