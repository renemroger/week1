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

const middle = function(arr) {
  const midIndex = Math.ceil(arr.length / 2);
  if (arr.length < 2) {
    return [];
  }
  if (arr.length % 2 === 1) {
    return [arr[midIndex]];
  } else {
    return [arr[midIndex - 1], arr[midIndex]];
  }
};


assertArraysEqual(eqArrays, [middle([1, 2, 3, 4]), middle([1, 2, 3, 4])], true);
assertArraysEqual(eqArrays, [middle([1, 2, 3, 4]), middle([1, 2, 3])], false);
assertArraysEqual(eqArrays, [middle([]), middle([1, 2, 3])], false);

