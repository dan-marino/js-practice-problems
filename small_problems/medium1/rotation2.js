function rotateRightmostDigits(number, rotationIndex) {
  let numberArray = String(number).split('');
  rotatedElement = numberArray.splice(-rotationIndex, 1)[0];
  numberArray[numberArray.length] = rotatedElement;
  return Number(numberArray.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// input number and rotation number
// output is a number

// turn number into an Array
// splice the number at that location
// concat to end of array
