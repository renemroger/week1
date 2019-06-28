/* eslint-disable no-prototype-builtins */

const organizeInstructors = function(instructors) {
  let listOfInstructors = {};
  //dynamically creating the object keys
  instructors.forEach(function(e) {
    if (!listOfInstructors.hasOwnProperty(e.course)) {
      listOfInstructors[e.course] = [];
    }
    //adding values to keys
    listOfInstructors[e.course].push(e.name);
  });
  return listOfInstructors;
};

const refOrganizeInstructors = function(instructors, func) {
  let listOfInstructors = {};
  //dynamically creating the object keys
  instructors.forEach(function(e) {
    if (!func(listOfInstructors, e.course)) {
      if (!listOfInstructors[e.course]) {
        listOfInstructors[e.course] = [];
      }
    }
    //adding values to keys
    listOfInstructors[e.course].push(e.name);
  });
  return listOfInstructors;
};


console.log(refOrganizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
], (x, y) => {
  console.log(x);
  console.log(y);
  console.log(x.hasOwnProperty(x[y]));
  return x.hasOwnProperty(x[y]);
}));

console.log('____________________________________');

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

