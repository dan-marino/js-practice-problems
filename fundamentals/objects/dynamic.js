var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
console.log(myObject);
// theres is key called 'prop2' and a key named after the value of variable prop2
// when assigning myObject['prop2'] this changes the orginal prop2 inside myObject to 456
// when assigning myObject[prop2] this creates a new key using the value of variable prop2
// assigning it a value of 678
// on line 11, the key with the variable gets logged because bracket notation looks for the variable first
// on line 12, the key with the string gets logged

// Further Exploration

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
