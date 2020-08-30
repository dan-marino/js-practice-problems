const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function changeToNumbers(char) {
  return ALPHABET.indexOf(char.toUpperCase())
}

function vigenereCipher(text, key) {
  let numberKey = key.split('').map(changeToNumbers);
  let numberKeyIndex = 0;

  return text.split('').map(char => {
    if (/[^a-z]/i.test(char)) return char;
    let encoded = ALPHABET.indexOf(char.toUpperCase()) + numberKey[numberKeyIndex];
    if (encoded > 25) encoded -= 26;
    numberKeyIndex += 1;
    if (numberKeyIndex === numberKey.length) numberKeyIndex = 0;
    return (char.toUpperCase() === char) ? ALPHABET[encoded] : ALPHABET[encoded].toLowerCase();
  }).join('');
}

console.log(vigenereCipher('hi how are you', 'key'));                    // rm fya ybi wyy
console.log(vigenereCipher('the brown fox jumped over', 'hello'));       // alp mfvay qce nfxdlh zgsy
console.log(vigenereCipher('can you encode this', 'nope'));              // rmfy aybi wyy
console.log(vigenereCipher('can this do number 13', 'yes'));             // poc xuwh hb bjqosg 13
console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'meat'));  // Bmnxmtpeqw dhz'x gh ar pbldal!


// input string to encode and string key
// output encoded string

// text will be ciphered based on a key
// depending on the letter, the word will be encoded differently
// so in the example
// 'apple' gets encoded with 'ant'
// the first letter of apple 'a' would get encoded with 'a' in ant
// a is zero, z is 25
// so 'a' would remain unchanged
// 'p', the next letter would get encoded with 'n' which is 13
// this would be 'p', which is 15 plus 13, essentially going around and becoming 'c'
// non alpbetical characters don't get encoded
// the key does not move along in the non character count

// need an alpabet to check for the index
// set keyIndex to zero
// i can just decode the key into an array of numbers right away
// then I can iterate through the string with map after converting to array
// every time its a numeric number, encode and increase the counter of the key index
// if key index === keyarray's length, then set it back to zero
