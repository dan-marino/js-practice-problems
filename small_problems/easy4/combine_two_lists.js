function interleave(arr1, arr2) {
  let combined = [];
  for (var i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
    combined.push(arr2[i]);
  }
  return combined;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
