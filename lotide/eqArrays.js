// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(assertEqual.caller);
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual}  ===  ${expected} Called by`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual}  ===  ${expected}`);
  }
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
const assertEqualTwo = function(func, args, expected) {
  const actual = func(...args);// [1,2,3], [1,2,3]] => [1,2,3] , [1,2,3]
  console.log((actual === expected) ? `✅✅✅  Assertion Passed:  ${actual}  ===  ${expected} --- Asserting : ${func.name}` :
    `🛑🛑🛑  Assertion Failed: ${actual}`);
};


assertEqualTwo(eqArrays, [[1, 2, 3], [1, 2, 3]], true);

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);