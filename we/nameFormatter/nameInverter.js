const nameInverter = function (name) {
  if (name === undefined) {
    throw new Error();
  }
  if (name === '') return '';

  let firstAndLast = name.trim().split(' ').filter(Boolean);

  if (
    name.trim() === "Dr." ||
    name.trim() === 'Mrs' ||
    name.trim() === 'Ms.' ||
    name.trim() === 'Mr.') {
    console.log('here')
    return '';
  }
  if (firstAndLast.length === 2 &&
    firstAndLast[0].trim() === 'Dr.' ||
    firstAndLast[0].trim() === 'Mrs.' ||
    firstAndLast[0].trim() === 'Mr.' ||
    firstAndLast[0].trim() === 'Ms.') {
    return `${firstAndLast[0]} ${firstAndLast[1]}`
  }

  if (firstAndLast.length === 2) {
    return `${firstAndLast[1]}, ${firstAndLast[0]} `.trim();
  }

  //only 1 name - check for empty space
  if (firstAndLast.length === 1) {
    return name.trim();
  }

  if (firstAndLast.length === 3) {
    return `${firstAndLast[0].trim()} ${firstAndLast[2].trim()}, ${firstAndLast[1].trim()}`
  }

}

module.exports = nameInverter;