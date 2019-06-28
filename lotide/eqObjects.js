// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual}  ===  ${expected}`);
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

const eqObjects = function(object1, object2) {
  if (Object.values(object2).length > Object.values(object1).length) {
    return eqObjects(object2, object1);
  }
  for (const property1 in object1) {
    if (Array.isArray(object1[property1]) && Array.isArray(object2[property1])) {
      if (!eqArrays(object1[property1], object2[property1])) {
        return false;
      }
    } else {
      if (object1[property1] !== object2[property1]) {
        return false;
      }
    }
  }
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "12", d: ["2", 3, 4] };
const cd4 = { c: "12", d: ["2", 3, 4, 5] };
const cd5 = { c: "12", d: ["2", 3, 4, 5], a: '4' };


console.log(eqObjects(cd, dc));

console.log(eqObjects(cd, cd2));

console.log(eqObjects(cd3, cd2));
console.log(eqObjects(cd3, cd2));
console.log(eqObjects(cd4, cd3));
console.log(eqObjects(cd4, cd5));