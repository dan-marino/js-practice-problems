function cleanUp(string) {
  cleanString = '';
  for (var i = 0; i < string.length; i++) {
    if (/[a-z]/i.test(string[i])) {
      cleanString += string[i];
    } else if (cleanString[cleanString.length - 1] === ' ') {
      continue;
    } else {
      cleanString += ' ';
    }
  }
  console.log(cleanString);
}

cleanUp("---what's my +*& line?");    // " what s my line "
