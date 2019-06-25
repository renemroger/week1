const args = (process.argv).slice(2, 3);

const dieRoller = function(times) {
  let string = '';
  for (let i = 1; i <= times; i++) {
    string += nGen(6);
    //add comma to all but last
    string += (Number(times) !== i ? ', ' : '');
  }
  return string;
};

const nGen = function(n = 6) {
  return Math.floor(Math.random() * n) + 1;
};

console.log(dieRoller(args));