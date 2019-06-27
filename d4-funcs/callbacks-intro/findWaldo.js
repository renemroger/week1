const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === 'Waldo')
      found(index);
  });
};


const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
