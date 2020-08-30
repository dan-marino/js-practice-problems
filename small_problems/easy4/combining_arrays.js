// function union(arr1, arr2) {
//   let combined = [];
//   uniqueArray(combined, arr1);
//   uniqueArray(combined, arr2);
//   return combined;
// }
//
// function uniqueArray(unique, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (!unique.includes(array[i])) unique.push(array[i]);
//   }
// }

function union(arr1, arr2) {
  return [...arr1, ...arr2].filter(unique);
}

function unique(element, index, array) {
  return array.indexOf(element) === index;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
