function randomNumbers(min, max) {
  if (max < min) [max, min] = [min, max];
  return Math.round(Math.random() * (max - min) + min);
}

let age = randomNumbers(20, 200);
console.log("Teddy is " + age + " years old!");
