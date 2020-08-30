function isPalindrome(string) {
  return reverseString(string) === string;
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
