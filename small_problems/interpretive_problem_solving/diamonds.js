// input integer
// output diamond
//
// space is integer / number rounded down
// diamond goes by odd increments until it reaches middle, then decrements by odd numbers
// space number goes down by one till zero, then increments by one till it hits 4
// the diamond's height equals the number
// spaceNumber and starNumber
// loop till height === number

function diamond(number) {
  const SPACE = ' '
  const STAR = '*'
  let spaceNumber = Math.floor(number / 2);
  let starNumber = 1;
  let height = 1

  while (height <= number) {
    let output = SPACE.repeat(spaceNumber) + STAR.repeat(starNumber);
    console.log(output);
    // increment starNumber, decrement spaceNumber before halfway point
    // decrement starNumber, increment spaceNumber after halfway point
    starNumber += (height > Math.floor(number / 2)) ? -2 : 2;
    spaceNumber += (height > Math.floor(number / 2)) ? 1 : -1;
    height += 1;
  }
}


diamond(1);
// *

diamond(3);
//  *
// ***
//  *

 diamond(9);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
