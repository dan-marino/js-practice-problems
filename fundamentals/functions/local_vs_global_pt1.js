var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'This is global'
// on line 6, a new variable is declared with the same name as the variable declared on line 1
// this new variable is part of the scope of the function
// and does not reassign the one declared and assigned on line 1
// on line 8, the code does not have access to the inner scope and uses the variable that has global scope
