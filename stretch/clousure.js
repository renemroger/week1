const wrapLog = function(callback, name) {
  /* your code here */

  return function(a, b, c) {
    return callback(a, b, c);
  }
};

const area = function(x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)) // area(3, 2) => 6

const volume = function(x, y, z) {
  return x * y * z;
};

const logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24







// function makeLoadedDie() {
//   const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   let lastIndex = 0;
//   return () => {
//     if (lastIndex >= list.length - 1)
//       lastIndex = 0;
//     return list[lastIndex++];
//   }
// }

// const rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6


// const countdownGenerator = function(x) {
//   const counter = x;

//   return () => {
//     if (x === 0) {
//       x--;
//       return 'Blast Off'
//     } else if (x < 0) {
//       return 'Rockets gone'
//     }
//     else
//       return x--;
//   }
// };

// const countdown = countdownGenerator(3);
// console.log(countdown()); // T-minus 3...
// console.log(countdown()); // T-minus 2...
// console.log(countdown()); // T-minus 1...
// console.log(countdown()); // Blast Off!
// console.log(countdown()); // Rockets already gone, bub!
// console.log(countdown()); // Rockets already gone, bub!