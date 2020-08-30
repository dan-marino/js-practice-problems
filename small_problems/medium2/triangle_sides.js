const sum = (sum, val) => sum + val

function invalidTriangle(sides) {
  return (sides.includes(0) || sides.slice(0, 2).reduce(sum) < sides[2]);
}

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  if (invalidTriangle(sides)) return 'invalid';
  else if (sides[0] === sides[2]) return 'equilateral';
  else if (sides[1] === sides[2]) return 'isosceles';
  else return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// input 3 numbers
// output string
// will we always get 3 numbers?
// will they always be positive numbers?

// no side can be zero
// the two smallest lengths when added up have to be larger than the longest length
// if three sides are equal, equilateral
// if two sides are equal, isosceles
// else scalene

// have array with sides that is sorted
// if there is a zeror or the sum of first two elements > last element, invalid
