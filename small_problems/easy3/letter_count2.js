function wordSizes(string) {
  let words = string.split(' ').map(word => word.split(''));
  let wordLengths = words.map(word => word.filter(letter => /[a-z]/i.test(letter)).join('').length)
  let count = {};
  wordLengths.forEach(length => {
    if (Object.keys(count).includes(String(length))) count[length] += 1;
    else count[length] = 1;
  })
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
