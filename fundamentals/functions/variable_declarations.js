console.log(a);

var a = 1;

// undefined
// hoisting moves the declaration before the console.log();
// but it does not move the assignment
// so variable a is set to undefined
// the value gets logged before it gets assigned to 1
