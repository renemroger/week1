const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.split(' ').join('');
  const counter = [];
  for (const s of string) {
    if (counter[s]) {
      counter[s] += 1;
    } else {
      counter[s] = 1;
    }
  }
  return counter;
};

const countMe = countLetters("count this string of letters");

assertEqual(countMe["c"], 1);
assertEqual(countMe["w"], undefined);