function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// when debugIt function is called, status is initialized in the scope of the function
// inside that function, another function is defined
// that function gets called inside the debugIt function
// that logger function logs the variable status from the outer scope
