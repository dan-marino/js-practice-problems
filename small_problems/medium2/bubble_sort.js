function bubbleSort(array) {
  let swap = 1;

  while (swap > 0) {
    swap = 0
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap += 1;
      }
    }
  }

  return array;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// input array
// output same array

// set swap = 1
// while (swap > 0)
// swap = 0
// for loop
// if current element is smaller than next element,
// swap the values
// swap += 1
