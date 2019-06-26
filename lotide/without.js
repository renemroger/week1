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

const without = function(array, remove) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!remove.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

assertArraysEqual(eqArrays, [without([1, 2, 3, 4], [2, 3]), [3, 4]], false);
assertArraysEqual(eqArrays, [without([1, 2, 3, 4], [1, 2]), [3, 4]], true);


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);

assertArraysEqual(eqArrays, [["hello", "world", "lighthouse"], words], true);