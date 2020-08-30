function multiplyList(arr1, arr2) {
  let multArray = [];
  for (var i = 0; i < arr1.length; i++) {
    multArray.push(arr1[i] * arr2[i]);
  }
  return multArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
