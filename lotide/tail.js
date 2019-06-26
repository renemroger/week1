// FUNCTION IMPLEMENTATION
const words = ["Yo Yo", "Lighthouse", "Labs"];

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
};

const tail = function(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.lenth === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!