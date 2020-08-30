var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// 7
// a is assigned to a primitive value, 7
// primitive values are immutable
// this has no affect on var a declared on line 1 for reassignment
