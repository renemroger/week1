// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`👎 👎 👎 Assertion Failed: ${actual}  ===  ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length >= 1)
    return arr[0];
  else
    return undefined;
}


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");