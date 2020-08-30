var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));

// the array length is 2
// that means the for loop will run 4 times from -2 to 2
// this will all add up to 20
// when 20 is divided by the array length, 10 is returned
