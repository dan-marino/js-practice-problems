function pop(array) {
  if (array.length === 0) return undefined;
  let poppedElement = array[array.length - 1]
  array.length = array.length - 1;
  return poppedElement;
}

function push() {
  let array;
  for (var i = 0; i < arguments.length - 1; i++) {
    array = arguments[0]
    array[array.length] = (arguments[i + 1])
  }
  return (arguments.length === 1) ? 0 : array.length;

}

// pop
var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
