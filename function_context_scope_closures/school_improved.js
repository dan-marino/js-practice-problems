let createStudent = function(name, grade) {
  return {
    courses: [],
    name: name,
    grade: grade,
    info: function() {
      return this.name + ' is a ' + this.grade + ' year student.';
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.find(course => course.code === courseCode);
      if (!course) return;
      if (!course.note) course.note = course.name + ': ' + note;
      else course.note += '; ' + note;
    },

    viewNotes: function() {
      coursesWithNotes = this.courses.filter(course => course.note);
      return coursesWithNotes.map(course => course.note).join('\n')
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.find(course => course.code === courseCode);
      course.note = undefined;
      this.addNote(courseCode, note);
    },

    listCourses: function() {
      return this.courses
    },
  }
}

let school = (function() {
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
  let students = [];

  let findStudent = function(student) {
    if (!students.includes(student)) {
      console.log('This student is not in this school.');
      return undefined;
    }
    return students.find(activeStudent => activeStudent === student);
  };
  return {
    addStudent: function(name, year) {
      if (!validYears.includes(year)) {
        console.log('Invalid Year');
        return
      }
      let student = createStudent(name, year);
      students.push(student);
      return student;
    },

    enrollStudent: function(student, course) {
      student = findStudent(student);
      if (!student) return;
      student.addCourse(course);
    },

    addGrades: function(student, course, grade) {
      student = findStudent(student);
      if (!student) return;
      course = student.courses.find(currentCourse => currentCourse.code === course.code);
      course.grade = grade;
    },

    getReportCard: function(student) {
      return student.courses.map(course => {
        grade = (course.grade) ? course.grade : 'In Progress';
        return course.name + ': ' + grade;
      }).join('\n');
    },

    courseReport: function(course) {
      let studentAndGrade = []
      students.forEach(student => {
        currentCourse = student.courses.find(currentCourse => currentCourse.name === course);
        if (currentCourse && currentCourse.grade) studentAndGrade.push([student, currentCourse])
      });
      if (studentAndGrade.length === 0) return
      let average = studentAndGrade.reduce((total, value) => total + value[1].grade, 0) / studentAndGrade.length;
      average = 'Course Average: ' + average;
      let report = studentAndGrade.map(subarray => subarray[0].name + ': ' + subarray[1].grade);
      report.unshift('=' + course + '=');
      report.push('---', average);
      return report.join('\n');
    }
  }
})();

let foo = school.addStudent('foo', '3rd')
school.enrollStudent(foo, { name: 'Math', code: 101, grade: 95, });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, grade: 90, });
school.enrollStudent(foo, { name: 'Physics', code: 202, });

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101, grade: 91, });

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101, grade: 93, });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102, grade: 90, });

console.log(school.getReportCard(foo));
// Math: 95
// Advanced Math: 90
// Physics: In progress

console.log(school.courseReport('Math'));
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

console.log(school.courseReport('Advanced Math'));
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

console.log(school.courseReport('Physics'));
// undefined
