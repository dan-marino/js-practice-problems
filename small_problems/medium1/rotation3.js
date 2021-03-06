function rotateRightmostDigits(number, rotationIndex) {
  let numberArray = String(number).split('');
  rotatedElement = numberArray.splice(-rotationIndex, 1)[0];
  numberArray[numberArray.length] = rotatedElement;
  return Number(numberArray.join(''));
}

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
