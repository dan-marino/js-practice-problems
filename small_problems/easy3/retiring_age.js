let rlSync = require("readline-sync");

let age = Number(rlSync.question("What is your age? "));
let retirementAge = Number(rlSync.question("At what age would you like to retire? "));

let today = new Date;
let currentYear = today.getFullYear();
let workingYears = retirementAge - age;
let retirementYear = currentYear + workingYears

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You only have ${workingYears} years of work to go!`);
