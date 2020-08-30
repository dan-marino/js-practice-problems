var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// 'This is global'
// javascript uses variable lookup to find variables when they are called
// it searches up until it finds the variable
// here, since there is no variable with that name in the function, we go to the outer scopes
// There, we find the variable, and the progam stops looking further
