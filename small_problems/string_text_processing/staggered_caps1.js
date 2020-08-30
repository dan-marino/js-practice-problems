function isEven(number) {
  return (number % 2 === 0);
}

function staggerCase(letter, index) {
  return isEven(index) ? letter.toUpperCase() : letter.toLowerCase();
}

function staggeredCase(string) {
  return string.split('').map(staggerCase).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
