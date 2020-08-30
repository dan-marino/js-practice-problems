function uniqueNumber(number) {
  return [...String(number)].every((char, _, array) => array.indexOf(char) === array.lastIndexOf(char));
}

function featured(number) {
  const MAX_FEATURE = 9876543201;
  if (number > MAX_FEATURE) return new Error('Error: No Next Featured Number');
  nextFeature = Math.ceil(number / 7) * 7;
  if (nextFeature % 2 === 0) nextFeature += 7;

  while (!uniqueNumber(nextFeature) || nextFeature === number) {
    nextFeature += 14;
  }

  return nextFeature
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987

// input number
// output number

// featured number has to be odd, divisible by 7, and not contain any duplicates
// where to start,
// divide number by 7
// if that number is even add one to that number
// then start a loop until a number is hit that meets these requirements
// each loop, incrememnt that start number by 14
// if that number is divisible by 7 and its a unique number, return that number
// how to tell if a number is unique
// convert number to string, then iterate through string
// if the index of that char is equal to the last index of that string
// and if on every case, this returns true, it is unique
