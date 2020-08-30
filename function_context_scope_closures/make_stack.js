let newStack = function() {
  let stack = [];
  return {
    push: function(element) {
      stack.push(element);
    },

    pop: function(element) {
      stack.pop();
    },

    printStack: function() {
      stack.forEach(item => console.log(item));
    }
  };
}

let myStack = newStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.printStack();
myStack.pop();
myStack.pop();
myStack.printStack();
