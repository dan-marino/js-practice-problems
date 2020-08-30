var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let timeStamp = new Date('1/1/2000 ' + timeStr)
  let hours = timeStamp.getHours();
  let minutes = timeStamp.getMinutes();
  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let timeStamp = new Date('1/1/2000 ' + timeStr)
  let hours = timeStamp.getHours();
  let minutes = timeStamp.getMinutes();
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}


console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
