const loopyLighthouse = function(range, multiples, words) {

  const [start, end] = range;
  const [multiples01, multiples02] = multiples;
  const [words01, words02] = words;

  for (let i = start; i <= end; i++) {
    let output = '';
    if (i % multiples02 === 0) {
      output += words01;
    }
    if (i % multiples01 === 0) {
      output += words02;
    }
    console.log(output === '' ? i : output);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

