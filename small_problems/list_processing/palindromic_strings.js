function substrings(string) {
  return string.split('').flatMap((_, index, array) => {
    return substringsAtStart(array.slice(index).join(''))
  })();
}

function substringsAtStart(string) {
  return string.split('').map((_, i, array) => array.slice(0, i + 1).join(''));
}

function reversed(string) {
  return string.split('').reverse('').join('');
}

function isPalindome(word) {
  return (word.length > 1) && (reversed(word) === word);
}

function palindromes(string) {
  return substrings(string).filter(isPalindome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
