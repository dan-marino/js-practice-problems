function rotate90(matrix) {
  let newMatrix = new Array(matrix[0].length).fill(0).map(element => [])
  for (var row = 0; row <= newMatrix.length - 1; row++) {
    for (var col = 0; col <= matrix.length - 1; col++) {
      newMatrix[row][col] = matrix[col][row];
    }
  }

  return newMatrix.map(subarray => subarray.reverse());
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// input nested array
// output nested array
// the first element of each array is in the first array
//
