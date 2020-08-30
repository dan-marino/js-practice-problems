// function stringToInteger(string) {
//   return string / 1
// }

function stringToInteger(string) {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var total = 0;

  for (var i = 0; i < string.length; i++) {
    var digit = DIGITS.filter(number => number == string[i])[0];
    total *= 10;
    total += digit;
  }

  return total;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
