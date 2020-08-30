var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// [1, 2, 3]
// [1, 2, 3]

// since they are pointing at the same array, the mutating function `pop` affects both
// however, myArray is reassignment and does not affect the `myOtherArray`
