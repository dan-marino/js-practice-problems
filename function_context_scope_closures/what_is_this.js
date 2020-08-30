// what is logged on line 9

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);


// NaN
// this is pointing to the global object
// both return undefined, and when summed together, return NaN

var person2 = {
  firstName: 'Morty ',
  lastName: 'Sanchez',
  fullName: function() {
    return this.firstName + this.lastName
  }
};

console.log(person2.fullName());
