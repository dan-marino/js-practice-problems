function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// the oddities function returns a new array
// for arrays, the equality operator only returns true when the operands are the exact same array
// just because they have the same elements, does not make them the same array.
// if two variables are pointing to the same array, then the equality operator will return true
