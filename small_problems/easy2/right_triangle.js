function triangle(number) {
  let spaceCount = number - 1
  for (var i = 1; i <= number; i++) {
    console.log(" ".repeat(spaceCount) + "*".repeat(i));
    spaceCount -= 1
  }
}

triangle(5);
triangle(9);
