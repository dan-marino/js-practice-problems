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

// function mergeSort(array) {
//   let nestedArray = array.map(element => [element])
//
//   do {
//     for (var i = 0; i < nestedArray.length; i++) {
//       if (nestedArray[i + 1] === undefined) continue;
//       nestedArray[i] = merge(nestedArray[i], nestedArray[i + 1]);
//       nestedArray.splice(i + 1, 1)
//     }
//   } while (nestedArray[0].length < array.length);
//
//   return nestedArray
// }

function mergeSort(array) {
  var subArray1;
  var subArray2;

  if (array.length === 1) {
    return array;
  }

  subArray1 = array.slice(0, array.length / 2);
  subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

// input array
// output array
// break array into nested array
// easiest way to get these into their own subarray is to
// map the array and have it return [element]
// for (var i = 0; i < array.length; i += 2) {
  // array[i]
