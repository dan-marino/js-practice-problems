function merge(arr1, arr2) {
  let sortedMerge = [];
  let index1 = 0;
  let index2 = 0;

  while (sortedMerge.length < arr1.length + arr2.length) {
    if (arr1[index1] <= arr2[index2] || arr2[index2] === undefined ) {
      sortedMerge.push(arr1[index1])
      index1 += 1
    } else if (arr1[index1] > arr2[index2] || arr1[index1] === undefined ) {
      sortedMerge.push(arr2[index2])
      index2 += 1
    }
  }

  return sortedMerge;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([1, 1, 3], [2, 6]));         // [1, 1, 2, 3, 6]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// input two arrays
// output one sorted array

// sorting must happen manually one by one
// original array must not be mutated
// both arrays are sorted
// loop until sortedMerge.length = two arrays lengths summed
// arrays can be different lengths
// index for arr1, index for arr2
// if arr1[index1] < arr2[index2]
//    sortedMerge.push(arr1[index1])
//    index1 += 1
// else arr1[index1] > arr2[index2]
//    sortedMerge.push(arr2[index2])
//    index2 += 1
// if one of them equals undefined, push the other element onto array
// else sortedMerge push both elements and increase both indices
//
