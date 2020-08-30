var phrase = prompt('Please enter a phrase:\n');
phrase.replace(/ /g, '')
console.log(`There are ${phrase.length} characters in ${phrase}.`);
