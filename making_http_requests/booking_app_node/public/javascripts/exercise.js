// QUESTION 2

document.addEventListener("DOMContentLoaded", function() {
  function getSchedules() {
    let request = new XMLHttpRequest();

    request.open("GET", "http://localhost:3000/api/schedules");
    request.timeout = 10000;
    request.responseType = "json";

    request.addEventListener("load", function(e) {
      let schedules = request.response;
      let staff = [];
      let message = {}

      if (schedules.length > 0) {
        schedules.forEach(opening => {
          let staff = "staff " + opening.staff_id
          message[staff] = (message[staff]) ? message[staff] + 1 : 1
        })
      } else {
        message = "There are currently no schedules available.";
      }

      alert(JSON.stringify(message));
    });

    request.send();

    request.addEventListener('timeout', event => {
      alert('It is taking longer than usual, please try again later.')
    });

    request.addEventListener('loadend', event => {
      alert('The request has completed.');
    });
  }

  // getSchedules();

  // QUESTION 3

  let form = document.querySelector("form");

  let formDataToJson = function(formData) {
    let json = {};
    for (let pair of formData.entries()) {
      json[pair[0]] = pair[1];
    }

    return json;
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const json = JSON.stringify(formDataToJson(formData));
    const request = new XMLHttpRequest();

    request.open("POST", form.action);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(json);

    request.addEventListener("load", function(e) {
      if (request.status === 201) {
        const data = JSON.parse(request.response);
        alert(`Successfully created staff with id: ${data.id}`);
        form.reset();
      } else if (request.status === 400) {
        alert(request.responseText);
      }
    });
  });
});
