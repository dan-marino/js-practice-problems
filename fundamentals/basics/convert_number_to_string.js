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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(123));      // "123"
