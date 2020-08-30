var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// if you are using bracket notation, the value inside the brackets must be a string value
// if it is a number it gets coerced to a string
// in this instance, javascript is looking for a variable a which is never declared
// if the variable was declared, javascript would have tried to coerced its value into a string
