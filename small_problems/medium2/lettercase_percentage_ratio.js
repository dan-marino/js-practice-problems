function letterPercentages(string) {
  let percentages = { lowercase: 0, uppercase: 0, neither: 0 }
  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) percentages.lowercase += 1;
    else if (/[A-Z]/.test(char)) percentages.uppercase += 1;
    else percentages.neither += 1;
  });

  Object.keys(percentages).forEach(key => {
    percentages[key] /= string.length / 100
    percentages[key] = String(percentages[key].toFixed(2));
  });

  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// input string
// output object

// set up percentages object
// convert string to array and iterate over every char
// when char is one of the three categories, add one to respective property
// once string is finished iterating through
// iterate through object, divide by string length, have it return a fixed number
// convert that into a string
// return object
