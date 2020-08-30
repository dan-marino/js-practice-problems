function stringToSignedInteger(string) {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var total = 0;

  for (var i = 0; i < string.length; i++) {
    if (/[+-]/.test(string[i])) continue;
    var digit = DIGITS.filter(number => number == string[i])[0];
    total *= 10;
    total += digit;
  }

  if (/[-]/.test(string)) (total *= -1);
  return total;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
