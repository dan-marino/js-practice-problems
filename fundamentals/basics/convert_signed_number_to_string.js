function integerToString(number) {
  const LETTER_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var total = '';
  var digit = number;

  do {
    digit = number % 10;
    total = (LETTER_DIGITS[digit]) + total;
    number = Math.floor(number / 10);
  } while (number >= 1)

  return total
}

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(-number)
  } else {
    return integerToString(number)
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
