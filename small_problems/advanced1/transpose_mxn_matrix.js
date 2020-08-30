function transpose(matrix) {
  let newMatrix = new Array(matrix[0].length).fill(0).map(element => [])
  for (var row = 0; row <= newMatrix.length - 1; row++) {
    for (var col = 0; col <= matrix.length - 1; col++) {
      newMatrix[row][col] = matrix[col][row];
    }
  }

  return newMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// input nested array
// output nested array

// matrix.length === newMatrix[0].length
// matrix[0].length === newMatrix.length
// first element of each subarray goes into respective subarray of newMatrix
// for loop that is the matrix length amount
// for loop that is matrix[0].length amount
