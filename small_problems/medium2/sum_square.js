function sumSquareDifference(number) {
  sumSquare = 0;
  squareSum = 0;

  for (let i = 1; i <= number; i++) {
    sumSquare += i;
    squareSum += Math.pow(i, 2);
  }
  
  return Math.pow(sumSquare, 2) - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
