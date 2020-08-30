function transpose(matrix) {
  return matrix.map((row, rowIdx) => row.map((_, colIdx) => matrix[colIdx][rowIdx]));
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// input nested array
// output nested array

// iterate through the array with foreach
// at each iteration, set them in the new array
