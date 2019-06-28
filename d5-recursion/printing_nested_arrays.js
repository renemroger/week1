/* eslint-disable func-style */
/* eslint-disable no-undef */
function printItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);