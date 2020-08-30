let greeter = {
  message: (function() {
    let name = 'Naveed';
    let greeting = 'Hello';
    return greeting + ' ' + name + '!';
  })(),
  sayGreetings: function() {
    console.log(this.message);
  }
};

greeter.sayGreetings();
