function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(callbacks) {
  let funcs = Array.prototype.slice.call(arguments);
  let startingLength = funcs.length * 2;
  let count = 0;
  let seconds = setInterval(function() {
    count++
    console.log(count);
    if (funcs.length !== 0 && (funcs.length === startingLength - count ||
        Math.round(Math.random()))) {
      let index = Math.floor(Math.random() * funcs.length - 1)
      let func = funcs.splice(index, 1)[0];
      func();
    }
    if (count === startingLength) clearInterval(seconds)
  }, 1000)


}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
