function fridayThe13ths(year) {
  let days = [];
  for (let i = 0; i < 12; i++) {
    days.push(new Date(year, i, 13))
  }

  return days.filter(day => day.getDay() === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// create a date for the 13th of every month
