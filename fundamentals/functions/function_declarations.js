// logValue();
//
// function logValue() {
//   console.log('Hello, world!');
// }

// 'Hello World'
// hoisting defines the functions of a program first
// when logValue is called, the hoisting has allowed it to be declared first

// Further Exploration

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// string
// since there is no parentheses, javascript looks for a variable
// the variable with that name has a string type
