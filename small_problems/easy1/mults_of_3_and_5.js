function multisum(num) {
  let multSum = 0;
  for (var i = 3; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) multSum += i;
  }
  console.log(multSum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
