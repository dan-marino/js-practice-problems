function reverse(inputForReversal) {
  let dataType = Array.isArray(inputForReversal) ? 'array' : 'string';
  let reversed = dataType === 'string' ? '' : [];
  for (var i = inputForReversal.length - 1; i >= 0; i--) {
    if (dataType === 'string') reversed += inputForReversal[i];
    else reversed.push(inputForReversal[i]);
  }
  return reversed;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
