function oddNumbers(start, end) {
  if (start % 2 === 0) start += 1;
  for (var i = start; i <= end; i += 2) {
    console.log(i);
  }
}

oddNumbers(2, 101);

// Further Exploration

// let num = 1;
// while (num < 100) {
//   console.log(num);
//   num += 2;
// }
