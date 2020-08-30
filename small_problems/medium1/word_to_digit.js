const wordDigits = 'zero one two three four five six seven eight nine'.split(' ')

function wordToDigit(string) {
  return string.split(' ').map(word => {
    if (wordDigits.includes(word.match(/\w+/i)[0])) {
      let digit = wordDigits.indexOf(word.match(/\w+/i)[0])
      return (/[.,!?:;]/.test(word[word.length - 1])) ? digit + word[word.length - 1] : digit;
    } else return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."
