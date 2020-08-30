const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function rotate(char, key) {
  let rotatedIndex = ALPHABET.indexOf(char.toUpperCase()) + key
  rotatedIndex = (rotatedIndex > 25) ? rotatedIndex - 25 : rotatedIndex;
  return (char.toUpperCase() === char) ? ALPHABET[rotatedIndex] : ALPHABET[rotatedIndex].toLowerCase();
}

function caesarEncrypt(string, key) {
  key %= 26;
  return string.split('').map(char => {
    return (ALPHABET.includes(char.toUpperCase())) ? rotate(char, key) : char
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// input string, number
// output string
// will the number always be positive?

// array
// string into an array
// iterate through each char in that array
// if that charCode is between lowercase ascii characters
// try adding that number key to that number,
// if that no longer points to a letter, then 26 - key and subtract that from charCode
// same thing for uppercase
// else just return char
// then join the array and return that
