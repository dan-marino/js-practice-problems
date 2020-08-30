var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// it will get stuck in an infinite loop, only outputing 0
// when the if conditional is true and the code in the block executes
// the index never increments.
// the index only increments when index is not divisible by 0
// since the index never increase, it loops till infinity since the conditional is always true
