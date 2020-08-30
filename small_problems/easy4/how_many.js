function countOccurrences(array) {
  occurences = {};
  for (var i = 0; i < array.length; i++) {
    if (Object.keys(occurences).includes(array[i])) occurences[array[i]] += 1
    else occurences[array[i]] = 1
  }
  Object.keys(occurences).forEach(key => console.log(key + " => " + occurences[key]));
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
