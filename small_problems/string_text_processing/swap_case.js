function swapLetterCase(letter) {
  return /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase();
}

function swapCase(string) {
  return string.split('').map(swapLetterCase).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
