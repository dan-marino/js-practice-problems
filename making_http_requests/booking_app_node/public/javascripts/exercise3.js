document.addEventListener("DOMContentLoaded", function() {
  const staff_dropdown = document.getElementById("staff_dropdown");
  const form = document.querySelector("form");
  const request = new XMLHttpRequest();
  const addMore = document.getElementById("addMore");
  let fieldsets = document.getElementsByTagName("fieldset");
  request.open("GET", "http://localhost:3000/api/staff_members");
  request.responseType = "json"

  request.addEventListener("load", function(e) {
    staff = request.response;
    staff.forEach(member => {
      const node = document.createElement("option");
      node.setAttribute("name", member.name);
      node.setAttribute("staff_id", member.id);
      node.textContent = member.name;
      staff_dropdown.append(node);
    })
  });

  request.send();

  addMore.addEventListener("click", function(e) {
    e.preventDefault();
    const nextFieldsetId = fieldsets.length + 1
    const fieldset = form.querySelector("fieldset");
    const nextFieldset = fieldset.cloneNode(true);
    const submit = document.querySelector("input[type=submit]");
    nextFieldset.setAttribute("id", "schedule-" + nextFieldsetId);
    let textFields = nextFieldset.querySelectorAll("input[type=text]");
    [...textFields].forEach(field => field.value = "");
    nextFieldset.querySelector("legend").textContent = "Schedule " + nextFieldsetId;

    form.insertBefore(nextFieldset, submit);
  });

  let formDataToJson = function(formData) {
    const inputFields = 3
    let json = [];
    let schedule = {};
    let count = 0;
    for (let pair of formData.entries()) {
      if (count === inputFields) {
        json.push(schedule);
        schedule = {};
        count = 0;
      }
      schedule[pair[0]] = pair[1];
      count++
    }

    json.push(schedule);
    return { schedules: json };
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const request = new XMLHttpRequest();
    const formData = new FormData(form);
    const json = JSON.stringify(formDataToJson(formData))
    request.open("POST", form.action);
    request.setRequestHeader("Content-Type", "application/json");

    request.addEventListener("load", function(e) {
      if (request.status === 201) form.reset();
      alert(request.responseText);
    });

    request.send(json);
  })
});
