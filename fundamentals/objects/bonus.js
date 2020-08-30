function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// if the second arguemnt is true, the ternary operator will take the salary
// which is the first argument and divide it by 2
// if the second argument is false, then 0 will be returned
