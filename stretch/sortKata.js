
const array = [10, 2, 5, 1, 9];
array.sort(function(a, b) { //Array now becomes [7, 8, 25, 41]
  return a - b;
});
const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

console.log(students.sort(function(a, b) {
  if (a.name === b.name) {
    return b.age - a.age;
  }
}).sort(function(a, b) {
  ///https://stackoverflow.com/questions/14208651/javascript-sort-key-value-pair-object-based-on-value
  return a.name.localeCompare(b.name);
}));
