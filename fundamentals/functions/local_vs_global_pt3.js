var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 'This is local'
// the function reassigns the variable myVar when the function is called on line 7
// inner scopes can access outer scopes
