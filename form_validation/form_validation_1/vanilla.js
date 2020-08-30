const errorMessages = {
  "First Name": "Please enter a valid name",
  "Last Name": "Please enter a valid name",
  "Email": "Please enter a valid email",
  "Phone Number": "Please enter a valid Phone Number",
  "Password": "Password must contain at least 10 characters",
  "Credit Card": "Please enter a valid credit card number",
};

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const names = document.querySelectorAll(".name");
  const inputs = document.querySelectorAll("input:not([type='submit'])");

  let errorMessageFieldBlur = function(e, errorMessage) {
    if (e.target.required && e.target.value.trim().length === 0) {
      errorMessage = e.target.getAttribute("input-name") + " is required."
    } else if (!e.target.checkValidity()) {
      errorMessage = errorMessages[e.target.getAttribute("input-name")];
    }
    e.target.parentNode.querySelector(".error-message").textContent = errorMessage;
  };

  let requiredFieldFocus = function(e) {
    e.target.parentNode.querySelector(".error-message").textContent = "";
  };

  inputs.forEach(input => {
    input.addEventListener("blur", errorMessageFieldBlur);
  });

  let invalidKeyPressName = function(e) {
    if (/[^a-z]/i.test(e.key)) e.preventDefault();
  };

  names.forEach(input => {
    input.addEventListener("keypress", invalidKeyPressName);
  });

  let formDataToJson = function(data) {
    const json = {};

    for (let pair of data.entries()) {
      json[pair[0]] = pair[1].trim();
    }

    return json;
  };

  let submitForm = function(e) {
    const request = new XMLHttpRequest();
    const formData = new FormData(form);
    const json = JSON.stringify(formDataToJson(formData));
    request.open("POST", form.action);
    request.responseType = "json";

    console.log(json);
    request.addEventListener("load", function(e) {
      // ...
    });

    request.send(json);
  };

  let allInputsValid = function() {
    return [...inputs].forEach(input => {
      
    });
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (allInputsValid()) {
      submitForm(e);
    } else {
      alert("Please fill in missing fields");
    }
  });
});
