let rlSync = require("readline-sync");
let result;
let answers = [];

answers[0] = rlSync.question("Enter the 1st number: ");
answers[1] = rlSync.question("Enter the 2nd number: ");
answers[2] = rlSync.question("Enter the 3rd number: ");
answers[3] = rlSync.question("Enter the 4th number: ");
answers[4] = rlSync.question("Enter the 5th number: ");
let query = rlSync.question("Enter the last number: ");

result = answers.includes(query) ? ' appears ' : ' does not appear '
stringArrayAnswers = "[" + answers.join(', ') + "]"

console.log("The number " + query + result + "in " + stringArrayAnswers);
