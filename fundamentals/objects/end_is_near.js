function penultimate(string) {
  let array = string.split(' ');
  return array[array.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// the negative index for the bracket notation will return undefined for negative numbers
// until they are defined.
// this is because arrays are objects

// Launch School's solution
// function penultimate(string) {
//   return string.split(' ').slice(-2, -1)[0];
// }
