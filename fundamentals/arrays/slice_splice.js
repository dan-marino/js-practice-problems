function slice(array, begin, end) {
  let slicedArr = [];
  if (begin > array.length) return slicedArr;
  if (end > array.length) end = array.length;
  for (let i = begin; i < end; i++) {
    slicedArr.push(array[i]);
  }
  return slicedArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

function splice(array, start, deleteCount) {
  let deletedArray = [];
  let elements = arguments.length - 3;
  if (deleteCount + start > array.length) deleteCount = array.length - start;

  deleteAtIndex(array, start, deleteCount, deletedArray)
  array.length += elements

  for (var i = array.length - 1; i > 0; i--) {
    array[i] = array[i - elements]
  }

  for (var i = 0; i < elements; i++) {
    array[i + start] = arguments[i + 3]
  }


  return deletedArray
}

// function addAtIndex(array, start, element1) {
//   for (var i = array.length; i > start; i--) {
//     temp1 = array[i];
//     array[i] = array[i - 1]
//   }
//   array[start] = element1;
// }

function deleteAtIndex(array, start, deleteCount, deletedArray) {
  for (var i = start; i < array.length; i++) {
    if (i < (deleteCount + start)) {
      deletedArray.push(array[i]);
      array[i] = array[i + 1]
    } if (i > start && deleteCount > 0) {
      array[i] = array[i + 1]
    }
  }
  array.length -= deleteCount
}


console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]
