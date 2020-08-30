function evenNumbers(start, end) {
  if (start % 2 !== 0) start += 1;
  for (var i = start; i <= end; i += 2) {
    console.log(i);
  }
}

evenNumbers(1, 99);
