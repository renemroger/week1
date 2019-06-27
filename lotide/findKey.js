const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual}  ===  ${expected}`);
  }
};

const findKey = function (data, func) {
  for (const d in data) {
    if (func(data[d])) {
      return d;
    }
  }
  return 'not found';
};


const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

console.log(key);