const letterPositions = function(sentence) {
  const results = [];
  let counter = 0;
  for (const l of sentence) {
    if (results[l]) {
      results[l].push(counter);
    } else {
      results[l] = [counter];
    }
    counter++;
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
const assertArraysEqual = function(arr1, arr2) {
  console.log((eqArrays(arr1, arr2)) ? `✅✅✅  Assertion Passed:  ${arr1}  ===  ${arr2} ` :
    `🛑🛑🛑  Assertion Failed: ${arr1} !== ${arr2}`);
};


const positions = letterPositions("hello").e;
console.log(positions);

assertArraysEqual(letterPositions("hello").e, [1]);