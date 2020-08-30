// Will the JavaScript garbage collection mechanism garbage collect
// the variable count after the function counter is run on line 13?

function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter();
// the value of 1 will be GC
// but the variable won't be GC
