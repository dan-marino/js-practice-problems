let Account = (function() {
  let getRandomArbitrary = function () {
    const START_OF_SYMBOLS = 33;
    const LAST_UPPERCASE_CHAR = 122;
    return Math.random() * (START_OF_SYMBOLS - LAST_UPPERCASE_CHAR) + LAST_UPPERCASE_CHAR;
  };

  let invalidPassword = function(testPassword, userPassword) {
    return testPassword !== userPassword;
  };

  let randomChar = function() {
    let code = '';
    while (code.length !== 16) {
      code += String.fromCharCode(getRandomArbitrary())
    }

    return code;
  };

  return {
    init: function(email, password, firstName, lastName, displayName) {
      let userEmail = email;
      let userPassword = password;
      let userFirstName = firstName;
      let userLastName = lastName;
      this.displayName = randomChar();

      this.firstName = function(testPassword) {
        return (invalidPassword(testPassword, userPassword)) ? 'Invalid Password' : userFirstName;
      }

      this.lastName = function(password) {
        return (invalidPassword(testPassword, userPassword)) ? 'Invalid Password' : userLastName;
      }

      this.email = function(password) {
        return (invalidPassword(testPassword, userPassword)) ? 'Invalid Password' : userEmail;
      }

      this.reanonymize = function(password) {
        if (invalidPassword(password)) return false;
        this.displayName = randomChar();
        return true;
      }

      this.resetPassword = function(password, newPassword) {
        if (invalidPassword(password)) return 'Invalid Password';
        if (!newPassword) return 'Invalid Password';
        userPassword = newPassword;
        return true
      }

      return this;
    }
  }
})();

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true
console.log(displayName === fooBar.displayName);   // logs false
