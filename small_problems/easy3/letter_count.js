function wordSizes(string) {
  let wordLengths = string.split(' ').map(word => word.length);
  let count = {};
  wordLengths.forEach(length => {
    if (Object.keys(count).includes(String(length))) count[length] += 1;
    else count[length] = 1;
  })
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));
