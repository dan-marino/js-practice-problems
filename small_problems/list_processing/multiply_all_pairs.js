function multiplyAllPairs(arr1, arr2) {
  let productArray = []
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      productArray.push(arr2[j] * arr1[i]);
    }
  }

  return productArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
