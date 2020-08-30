function substrings(string) {
  return string.split('').flatMap((_, index, array) => {
    return substringsAtStart(array.slice(index).join(''))
  });
}

function substringsAtStart(string) {
  return string.split('').map((_, i, array) => array.slice(0, i + 1).join(''));
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
