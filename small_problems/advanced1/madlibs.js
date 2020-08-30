function madlibs(template) {
  let randomIndex = function(words) { return words[Math.floor(Math.random() * words.length)] };
  let grammar = {
    adjective: ['funny', 'nice', 'good', 'happy'],
    noun: ['car', 'floor', 'dream', 'phone'],
    verb: ['hop', 'jump', 'sneeze', 'peel'],
    adverb: ['lovely', 'graciously', 'willingly', 'unconditionally'],
  }

  Object.keys(grammar).forEach(key => {
    let regex = new RegExp(`\\b${key}\\b`, 'i')
    while (regex.test(template)) {
      template = template.replace(regex, randomIndex(grammar[key]));
    }
  });

  return template;
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

let template1 = "The adjective noun verb around\n" +
                "what a noun could adverb verb if it tried\n" +
                "adjective enough, while still adverb verb\n" +
                "like a adjective noun should."
console.log(madlibs(template1));

console.log(madlibs(template1));

let template2 = 'How is noun doing today?\n' +
                'adverb they are adjective.\n' +
                'I haven\'t verb them in a adjective noun.'
console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
