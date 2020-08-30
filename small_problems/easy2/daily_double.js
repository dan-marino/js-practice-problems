function crunch(string) {
  let updatedString = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) updatedString += string[i];
  }
  return updatedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));
                         // ""
