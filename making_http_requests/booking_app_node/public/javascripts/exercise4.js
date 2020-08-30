document.addEventListener("DOMContentLoaded", function() {
  const schedules = document.getElementById("schedules_dropdown");
  const email = document.getElementById("email");
  const bookAppointment = document.getElementById("book_appointment");
  const addNewStudentForm = document.getElementById("add_new_student");
  const newStudentEmailInput = addNewStudentForm.querySelector("input[type=email]");
  const bookingSequenceInput = addNewStudentForm.querySelector("input[name=booking_sequence]");
  const newStudentName = addNewStudentForm.querySelector("input[name=name]");
  let staffMembers;
  let availableSchedules;

  let loadStaffMembers = function() {
    let request = new XMLHttpRequest();
    request.open("GET", "./api/staff_members");
    request.responseType = "json";

    request.addEventListener("load", function(e) {
      staffMembers = request.response;
      loadSchedules();
    });

    request.send();
  };

  let loadSchedules = function() {
    let request = new XMLHttpRequest();
    request.open("GET", "./api/schedules");
    request.responseType = "json";

    request.addEventListener("load", function(e) {
      availableSchedules = request.response;
      formatDropDown();
    });
    request.send();
  };

  let formatDropDown = function() {
    availableSchedules.forEach(schedule => {
      if (schedule.student_email === null) {
        let node = document.createElement("option");
        node.textContent = staffMembers[schedule.staff_id].name + " | " +
                           schedule.date + " | " + schedule.time;
        node.setAttribute("value",  schedule.id);
        schedules.append(node);
      }
    });
  };

  let getBookingJson = function() {
    let json = {};
    let scheduleId = schedules.selectedOptions[0].value;
    json.id = scheduleId;
    json.student_email = email.value;

    return JSON.stringify(json)
  }

  // I like the page to load the staff_dropdown right away.
  loadStaffMembers();
  // schedules.addEventListener("click", loadStaffMembers());

  let reloadAvailableSchedules = function() {
    let selected = schedules.selectedOptions[0];
    schedules.removeChild(selected);
  }

  let submitBooking = function(e) {
    if (e) e.preventDefault();
    const request = new XMLHttpRequest();
    const json = getBookingJson();
    request.open("POST", bookAppointment.action);
    request.setRequestHeader("Content-Type", "application/json");

    request.addEventListener("load", function(e) {
      if (request.status === 204) {
        alert("Booked");
        reloadAvailableSchedules();
        bookAppointment.reset();
      } else if (request.status === 404) {
        alert(request.response);
        addNewStudent(request.response, json);
      }
    });

    request.send(json);
  }

  bookAppointment.addEventListener("submit", submitBooking) ;

  // second portion of question

  let getNewStudentJson = function() {
    let json = {};
    json.email = newStudentEmailInput.value;
    json.name = newStudentName.value;
    json.booking_sequence = bookingSequenceInput.value;

    return JSON.stringify(json);
  }

  let addNewStudent = function(response, json) {
    const enteredEmail = JSON.parse(json).student_email
    const bookingSequence = response.match(/[0-9]+/g);
    newStudentEmailInput.value = enteredEmail;
    bookingSequenceInput.value = bookingSequence;
    addNewStudentForm.style.visibility = "visible";
  };

  addNewStudentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const request = new XMLHttpRequest();
    const json = getNewStudentJson();
    request.open("POST", addNewStudentForm.action);
    request.setRequestHeader("Content-Type", "application/json");

    request.addEventListener("load", function(e) {
      e.preventDefault();
      alert(request.response);
      if (request.status === 201) {
        addNewStudentForm.reset();
        addNewStudentForm.style.visibility = "hidden";
        submitBooking();
      }
    });

    request.send(json);
  });
});
