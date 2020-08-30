var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);

// 3
// 4
// 3
// 5

// arrays are like objects. when you use bracet notation, you can assign non integers and negative numbers
// to values, like object properties.
// the length method only counts to the highest index number and adds one
// the Object.keys(array).length, counts all the properties
