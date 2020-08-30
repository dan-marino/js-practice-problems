function getGrade(grade1, grade2, grade3) {
  average = (grade1 + grade2 + grade3) / 3;
  let letterGrade = "F";
  if (average > 89) {
    letterGrade = "A";
  } else if (average > 79) {
    letterGrade = "B";
  } else if (average > 69) {
    letterGrade = "C";
  } else if (average > 59) {
    letterGrade = "D";
  }
  console.log(letterGrade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
