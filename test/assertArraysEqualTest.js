const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

// Test Code
assertArraysEqual([1,2,3], [1,2,4]);
assertArraysEqual(['1','2','3'], ['1','2',3]);
assertArraysEqual(['1','2','3'], ['1','2','3']);
assertArraysEqual([], [1]);
assertArraysEqual( [1,2] , [3] ); 