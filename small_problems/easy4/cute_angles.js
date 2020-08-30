const MAX_DEGREES = 360;
const MINUTES_IN_DEGREES = 60;
const SECONDS_IN_MINUTES = 60;

function dms(number) {
  let degrees = parseInt(number) % MAX_DEGREES;
  degrees = degrees < 0 ? MAX_DEGREES + degrees : degrees;
  let seconds = number - parseInt(number);
  let minutes = parseInt(seconds * MINUTES_IN_DEGREES);
  seconds = (seconds * MINUTES_IN_DEGREES) - minutes;
  seconds = parseInt(seconds * SECONDS_IN_MINUTES);
  return degrees + '°' + addZero(minutes) + "'" + addZero(seconds) + '"'
}

function addZero(number) {
  return (number < 10) ? '0' + number : number;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
