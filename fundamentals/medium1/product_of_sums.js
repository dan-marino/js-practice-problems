function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum = 0;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

// there are two problems
// sum needs to be set to a number, otherwise you are concating the number to undefined on line 12
// which results in NaN
// it's missing the key word return on line 15

console.log(productOfSums([5, 5], [2, 2]));
