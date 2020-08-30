var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// 'This is local'
// this is variable shadowing since it is a new variable with the same name as one in the outer scope
// but this variable gets priority since it is in the inner scope
