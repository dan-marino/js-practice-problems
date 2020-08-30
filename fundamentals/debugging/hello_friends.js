function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;
  var name;
  var greeting;

  for (i = 0; i < names.length; i++) {
    name = names[i];
    greeting = randomGreeting();

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
