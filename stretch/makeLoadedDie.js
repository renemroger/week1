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


const countdownGenerator = function(x) {
  const counter = x;

  return () => {
    if (x === 0) {
      x--;
      return 'Blast Off'
    } else if (x < 0) {
      return 'Rockets gone'
    }
    else
      return x--;
  }
};

const countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!