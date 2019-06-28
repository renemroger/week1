
//not working if there is something right from the object.

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual}  ===  ${expected}`);
  }
};

const eqArrays = function (arr, arr02) {
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

const eqObjects = function (object1, object2) {
  if (Object.keys(object2).length > Object.keys(object1).length) {
    console.log(Object.values(object2).length + ' length 2');
    console.log(Object.values(object1).length + ' length 1');
    return eqObjects(object2, object1);
  }
  for (const o in object1) {

    if (!(typeof object1[o] === 'object' && !Array.isArray(object1[o]) && typeof object1[o] !== 'string')) {
      continue;
    } else {
      eqObjects(object1[o], object2[o]);
    }
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


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd3 = { c: "12", d: ["2", 3, 4] };
// const cd4 = { c: "12", d: ["2", 3, 4, 5] };
// const cd5 = { c: "12", d: ["2", 3, 4, 5], a: '4' };


console.log(eqObjects({ a: { z: 1, a: { z: 1, a: 3 } }, b: 2 }, { a: { z: 1, a: { z: 1, a: 3 } }, b: 2 }));