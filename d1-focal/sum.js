const sum = (arr) => {
  return (parseInt(arr[0]) + parseInt(arr[1]));
};
const args = process.argv;
console.log(sum(args.slice(2)));