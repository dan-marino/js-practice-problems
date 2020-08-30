function isPalindromicNumber(number) {
  return reverseString(String(number)) === String(number);
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
