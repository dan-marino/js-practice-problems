function centerOf(string) {
  let halfLength = string.length / 2
  if (parseInt(halfLength) === halfLength) {
    return string[halfLength - 1] + string[halfLength]
  } else {
    return string[Math.floor(halfLength)]
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
