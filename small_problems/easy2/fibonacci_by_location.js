function findFibonacciIndexByLength(number) {
  let fibArray = [1, 1]
  for (let i = 1; ; i++) {
    let fibNumber = fibArray[i] + fibArray[i - 1];
    fibArray.push(fibNumber);
    if (String(fibNumber).length === number) return i + 2;
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
