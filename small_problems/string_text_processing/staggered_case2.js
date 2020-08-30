function staggeredCase(string) {
  let lastCharLowerCase = true;
  return string.split('').map(letter => {
    if (lastCharLowerCase) {
      lastCharLowerCase = false;
      return letter.toUpperCase();
    } else {
      lastCharLowerCase = true;
      return letter.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
