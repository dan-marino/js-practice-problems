function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global'
// line 5 calls someFunction
// on line 2, myVar is not declared
// it can't find anything on the lookup chain so it has global scope
// on line 6, the code can access myVar because it now has global scope
