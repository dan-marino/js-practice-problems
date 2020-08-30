function sumOrProduct() {
  const rlSync = require("readline-sync")
  let number = rlSync.question("Please enter an integer greater than 0: ");
  while (!/^[0-9]*$/.test(number)) {
    console.log("Invalid input.");
    number = rlSync.question("Please enter an integer greater than 0: ");
  }

  let decision = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. ");
  while (!['p', 's'].includes(decision)){
    console.log("Invalid input.");
    decision = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. ");
  }

  let answer = 1;

  for (var i = 2; i <= Number(number); i++) {
    if (decision === 's') answer += i;
    if (decision === 'p') answer *= i;
  }

  console.log(answer);
}

sumOrProduct();
