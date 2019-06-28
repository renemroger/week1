/* eslint-disable no-prototype-builtins */

const organizeInstructors = function(instructors, func) {
  const listOfInstructors = {};
  //dynamically creating the object keys
  instructors.forEach(function(e) {
    console.log(instructors[e]);
    if (func(listOfInstructors, instructors[e])) {
      listOfInstructors[e.course] = [];
      console.log(`add ${listOfInstructors[e.console]}`);
    }
    //adding values to keys
    listOfInstructors[e.course].push(e.name);
  });
  return listOfInstructors;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
], (x, y) => !x.hasOwnProperty(x[y])));

// console.log(organizeInstructors([
//   { name: "Brendan", course: "Blockchain" },
//   { name: "David", course: "Web" },
//   { name: "Martha", course: "iOS" },
//   { name: "Carlos", course: "Web" }
// ], (x) => typeof x === undefined));

