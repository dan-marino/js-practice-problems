function tipCalculator() {
  const rlSync = require('readline-sync');
  let bill = Number(rlSync.question("What is the bill? "));
  let percentage = Number(rlSync.question("What is the percentage? "));
  percentage /= 100;
  let tip = (bill * percentage);
  let total = (bill + tip);

  console.log(`Your tip is $${tip.toFixed(2)}`);
  console.log(`Your total is $${total.toFixed(2)}`);
}

tipCalculator();
