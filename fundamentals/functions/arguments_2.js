var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// 7
// variable a is passed in as an argument to myValue
// it is assigned to a new local variable a that overshadows the one in the outer scope
