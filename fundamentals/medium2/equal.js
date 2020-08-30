var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// objects need to be the same exact object in order for the equality operator to return true
// having the same elements is not enough for the expression to return true
