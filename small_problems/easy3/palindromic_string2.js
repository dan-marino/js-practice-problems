function isRealPalindrome(string) {
  alphaNumericString = string.split('').filter(char => /[a-z0-9]/i.test(char)).join('');

  let reversedLowerCaseString = alphaNumericString.split('').map(char => char.toLowerCase()).reverse().join('');
  let stringLowerCase = alphaNumericString.split('').map(char => char.toLowerCase()).join('');
  return stringLowerCase === reversedLowerCaseString;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
