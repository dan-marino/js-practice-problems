function logInBox(string) {
  let width = string.length + 2
  let topBottomLine = "+" + "-".repeat(width) + "+"
  let emptyLine = "|" + " ".repeat(width) + "|"
  let textLine = "| " + string + " |"

  console.log(topBottomLine);
  console.log(emptyLine);
  console.log(textLine);
  console.log(emptyLine);
  console.log(topBottomLine);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
