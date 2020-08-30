function twice(number) {
  let stringNumber = String(number);
  if (stringNumber.length % 2 === 0) {
    let firstHalf = stringNumber.slice(0, stringNumber.length / 2);
    let secondHalf = stringNumber.slice(stringNumber.length / 2, stringNumber.length);
    if (firstHalf === secondHalf) return number;
  }
  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
