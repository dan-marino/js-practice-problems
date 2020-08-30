function getMultiples(array) {
  return new Array(array[1]).fill(array[0]);
}

function buyFruit(array) {
  return array.reduce((acc, subarray) => [...acc ,...getMultiples(subarray)] ,[])
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
