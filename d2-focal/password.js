//get one string from command line argument
const args = (process.argv).slice(2, 3);

const obfuscate = function(password = '') {
  let obfuscatedPw = '';
  [password] = password;
  if (password[0].trim() === '') {
    return 'You havent inputted a password';
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i] === 'a') {
      obfuscatedPw += '4';
    } else if (password[i] === 'e') {
      obfuscatedPw += '3';
    } else if (password[i] === 'o') {
      obfuscatedPw += '0';
    } else if (password[i] === 'l') {
      obfuscatedPw += '1';
    } else {
      obfuscatedPw += password[i];
    }
  }
  return obfuscatedPw;
};

console.log(obfuscate(args));