function stringy(number) {
  let onesAndZeros = '';
  for (var i = 1; i <= number; i++) {
    onesAndZeros+= (i % 2 === 0) ? 0 : 1;
  }
  return onesAndZeros;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
