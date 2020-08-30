// first alternate copy

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// second alternate copy

myArray = [1, 2, 3, 4];
myOtherArray = myArray.map(elements => elements)

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
