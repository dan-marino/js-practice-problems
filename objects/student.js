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

foo = createStudent('Foo', '1st');
console.log(foo.info());
// Foo is a 1st year student
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
console.log(foo.viewNotes());
// Math: Fun Course; Remember to study for algebra
foo.addNote(102, 'Difficult subject');
console.log(foo.viewNotes());
// Math: Fun Course; Remember to study for algebra
// Advanced Math: Difficult Subject
foo.updateNote(101, 'Fun course');
console.log(foo.viewNotes());
// Math: Fun Course
// Advance Math: Difficult Subject
