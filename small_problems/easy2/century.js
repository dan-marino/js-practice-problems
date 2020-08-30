function century(year) {
  let thEndings = [0, 4, 5, 6, 7, 8, 9, 11, 12, 13]
  let century = Math.ceil(year / 100);
  if (thEndings.includes(century % 10) || (thEndings.includes(century) % 100)) {
    console.log(century + "th");
  } else if (century % 10 === 1) {
    console.log(century + "st");
  } else if (century % 10 === 2) {
    console.log(century + "nd");
  } else if (century % 10 === 3) {
    console.log(century + "rd");
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
