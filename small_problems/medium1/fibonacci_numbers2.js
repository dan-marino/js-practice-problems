function fibonacci(number) {
  let fibonacci = [1, 1]
  while (fibonacci.length < number) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
  }

  return fibonacci[fibonacci.length - 1]
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
