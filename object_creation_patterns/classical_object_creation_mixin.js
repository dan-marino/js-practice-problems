function delegate(callingObject, methodOwner, methodName) {
  return function() {
    return methodOwner[methodName].apply(callingObject, arguments);
  };
}

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}
Person.prototype.communicate = function() {
  console.log('Communicating');
}
Person.prototype.eat = function() {
  console.log('Eating');
}
Person.prototype.sleep = function() {
  console.log('Sleeping');
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Object.setPrototypeOf(Doctor.prototype, Person.prototype);
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Object.setPrototypeOf(Professor.prototype, Person.prototype);
Professor.prototype.teach = function() {
  console.log('Teaching');
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
}

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

Object.setPrototypeOf(GraduateStudent.prototype, Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

let professional = {
  invoice: function() {
    console.log(`${this.fullname} is billing customer.`);
  },

  payTax: function() {
    console.log(`${this.fullname} is paying taxes.`);
  },
}

function extend(obj, mixin) {
  Object.keys(mixin).forEach(key => obj[key] = delegate(obj, mixin, key));
  return obj;
}

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
