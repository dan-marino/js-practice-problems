function runningTotal(array) {
  return array.map((number, index) => {
    return array.slice(0, (index + 1)).reduce((a, b) => a + b, 0)
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
