const findWaldo = function (names, found) {
  names.forEach((name, index) => {
    if (name === 'Waldo')
      found(index);
  });
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => console.log(`Found Waldo at index ${index}!`));