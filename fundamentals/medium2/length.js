var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

// ['JavaScript', 'Ruby', 'Python']
// 3

// ['JavaScript', 'Ruby', 'Python', empty]
// 4

// ['JavaScript']
// 1

// ['JavaScript', empty, empty]
// 3

// ['JavaScript', empty, 'Python']
// empty
// 3

// if you set an arrays length longer than its length, the array will extend to that length,
// leaving empty spaces in the new indices
// if you set an arrays length shorter than its length, you delete all values that extended beyond that index
// if you use bracket notation to assign a new value to an array, that index will be assigned to the new value
// if that bracket notation is larger than the length of the array, the new element will be the last one in the array
// and any new indices inbetween will be empty
