document.addEventListener("DOMContentLoaded", function() {
  const bookings = document.getElementById("bookings");
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
      if (schedule.student_email) {
        let li = document.createElement("li");
        li.textContent = schedule.date;
        let nestedUl = document.createElement("ul");
        let nestedLi = document.createElement("li");
        nestedLi.textContent = staffMembers[schedule.staff_id].name + " | " +
                              schedule.student_email + " | " + schedule.time;
        nestedUl.classList.add("scheduling_info")
        nestedUl.append(nestedLi);

        li.append(nestedUl)
        nestedUl.style.display = "none";

        bookings.append(li);

      }
    });
  };

  loadStaffMembers();

  bookings.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.parentNode.classList.contains("scheduling_info")) {
      e.target.parentNode.style.display = "none";
    } else {
      e.target.querySelector(".scheduling_info").style.display = "";
    }
  })
});
