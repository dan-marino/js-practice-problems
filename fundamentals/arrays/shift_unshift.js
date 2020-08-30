function shift(array) {
  if (array.length === 0) return undefined;
  firstElement = array[0]
  for (var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1]
  }
  array.length -= 1
  return firstElement;
}

function unshift(array) {
  let argumentsLength = arguments.length - 1
  array.length += argumentsLength;
  for (var i = array.length - 1; i > 0; i--) {
    array[i] = array[i - argumentsLength];
  }
  for (var i = 0; i < arguments.length - 1; i++) {
    array[i] = arguments[i + 1];
  }

  return array;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
