var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// [1, 2, 10]
// arrays are mutable
// index assignment is being executed on the array assigned to a
