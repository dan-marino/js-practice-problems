function shortLongShort(shortString, longString) {
  if (shortString.length > longString.length) {
    [shortString, longString] = [longString, shortString];
  }
  combinedStrings = shortString + longString + shortString;
  console.log(combinedStrings);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
