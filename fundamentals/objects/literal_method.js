var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// function () {
//   return 'Victor';
// } function () {
//   return 'Reyes';
// }

// object literal methods must be called by appending parentheses in order to executed
