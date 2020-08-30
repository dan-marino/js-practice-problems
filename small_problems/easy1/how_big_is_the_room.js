function findArea() {
  const rlSync = require('readline-sync');
  const SQUARE_METER_TO_SQUARE_FEET = 10.7639
  let length = Number(rlSync.question("Enter the length of the room in meters: \n"));
  let width = Number(rlSync.question("Enter the width of the room in meters: \n"));
  let areaMeters = (length * width).toFixed(2);
  let areaFeet = (SQUARE_METER_TO_SQUARE_FEET * areaMeters).toFixed(2);

  console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square meters).`);
}

findArea();
