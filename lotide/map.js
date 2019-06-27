const words = ["ground", "control"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(arr, arr02) {
  let same = true;
  if (arr.length === arr02.length) {
    for (let i = 0; i < arr.length; i++) {
      same = arr[i] === arr02[i] ? true : false;
      if (!same) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(func, args, expected) {
  const actual = func(...args);// [1,2,3], [1,2,3]] => [1,2,3] , [1,2,3]
  console.log((actual === expected) ? `✅✅✅  Assertion Passed:  ${actual}  ===  ${expected} --- Asserting : ${func.name}` :
    `🛑🛑🛑  Assertion Failed: ${actual}`);
};



const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(eqArrays, [results1, ['g', 'c', 3]], false);
assertArraysEqual(eqArrays, [results1, ['g', 'c']], true);

const wordsSemiEmpty = ["", ""];
assertArraysEqual(eqArrays, [wordsSemiEmpty, ['', '']], true);

const wordsEmpty = [];
assertArraysEqual(eqArrays, [wordsEmpty, ['']], false);