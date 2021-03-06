function myFilter(array, func, context) {
  var result = [];

  array.forEach(function(value) {
    if (func.call(context, value)) {
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

let newFilter = myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]

console.log(newFilter);
