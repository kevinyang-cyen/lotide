# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@kevinyang-cyen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Asserts whether actual array is equal to the expected array
* `assertEqual(actual, expected)`: Asserts whether actual value is equal to the expected value
* `assertObjectsEqual(actual, expected)`: Asserts whether actual object is equal to expected object
* `countLetters(string)`: Counts the number of letters in a given string
* `countOnly(allItems, itemsToCount)`: Counts the items in a given object within a given array
* `eqArrays(arrayOne, arrayTwo)`: Checks whether two given arrays are equal
* `eqObjects(objectOne, objectTwo)`: Checks whether two given objects are equal
* `findKey(object, callBack)`: Returns the key of the first element predicate returns truthy for
* `findKeyByValue(objectToSearch, item)`: Returns the key of an given item value within an object
* `flatten(nestedArray)`: Returns a one level array from a given nested array
* `head(array)`: Returns an array with the first value of the given array
* `letterPositions(sentence)`: Returns an object with the count of each letter in a given string
* `map(array, callback)`: Creates a new array populated with the results of calling a provided function on every element in the calling array
* `middle(array)`: Returns an array with the middle index value of a given array, returns empty array if given array length is 1 or 0
* `tail(array)`: Returns an array with that excludes the first value of the given array
* `takeUntil(array, callback)`: Creates a new array populated with the results of the original array until the callback condition is true
* `without(source, itemsToRemove)`: Removes all values from itemsToRemove array from the source array


