
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

const eqObjects = function(object1, object2) {
  if (Object.values(object2).length > Object.values(object1).length) {
    return eqObjects(object2, object1);
  }
  for (const property1 in object1) {
    if (Array.isArray(object1[property1]) && Array.isArray(object2[property1])) {
      return eqArrays(object1[property1], object2[property1]);
    }
    if (object1[property1] !== object2[property1]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed:  ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 4], c: "1" };
assertObjectsEqual(cd, dc);