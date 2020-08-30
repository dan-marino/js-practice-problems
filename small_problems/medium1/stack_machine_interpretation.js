function minilang(commands) {
  let stack = []
  let register = 0;
  commands = commands.split(' ');

  for (var i = 0; i < commands.length; i++) {
    if (/\d/.test(commands[i])) register = Number(commands[i]);
    else if (commands[i] === 'PUSH') stack.push(register);
    else if (commands[i] === 'ADD') register += stack.pop();
    else if (commands[i] === 'SUB') register -= stack.pop();
    else if (commands[i] === 'MULT') register *= stack.pop();
    else if (commands[i] === 'DIV') register = Math.round(register / stack.pop());
    else if (commands[i] === 'MOD') register %= stack.pop();
    else if (commands[i] === 'POP') register = stack.pop();
    else if (commands[i] === 'PRINT') console.log(register);
  }
}


// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
