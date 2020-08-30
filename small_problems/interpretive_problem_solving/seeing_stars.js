function generateStars(increasing, decreasing, max) {
  let starArray = []
  for (var i = increasing; i <= max; i++, decreasing--) {
    starArray.push(' '.repeat(i) + ('*' + ' '.repeat(decreasing)).repeat(2) + '*');
  }

  return starArray;
}

function star(number) {
  let outerSpace = 0;
  let innerSpace = (number - 3) / 2;
  let middleRow = '*'.repeat(number)
  let max = innerSpace;

  starsArray = generateStars(outerSpace, innerSpace, max)
  starsArray.forEach(array => console.log(array));
  console.log(middleRow);
  starsArray.reverse().forEach(array => console.log(array));
}

star(7);
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

// input number
// output is a star
// star has 8 points
// only the middle column is completely stars
// every row other than that has the same amount of stars and spaces
// outer space same on both sides
// inner space same on both sides

// outerSpace = 0
// innerSpace = (number - 3) / 2
// stars = 3
// for loop that completes once outerSpace === (number - 3) / 2
// then put middle piece
// then put that loop back until innerSpace === (number -3) / 2
