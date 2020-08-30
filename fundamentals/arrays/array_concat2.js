function concatArrays(newArr, arr) {
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
}

function concat() {
  let concatedArr = [];
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) concatArrays(concatedArr, arguments[i]);
    else concatedArr.push(arguments[i]);
  }
  return concatedArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
