var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// 45

// the function creates a closure of everything it needs
// it can access the variable, even if the value changes
