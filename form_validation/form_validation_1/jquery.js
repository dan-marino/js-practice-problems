const errorMessages = {
  "First Name": "Please enter a valid name",
  "Last Name": "Please enter a valid name",
  "Email": "Please enter a valid email",
  "Phone Number": "Please enter a valid Phone Number",
  "Password": "Password must contain at least 10 characters",
  "Credit Card": "Please enter a valid credit card number",
};

document.addEventListener("DOMContentLoaded", function() {
  const $form = $("form");
  const $names = $(".name");
  const $inputs = $("input:not([type='submit'])");

  let errorMessageFieldBlur = function(e, errorMessage) {
    if (e.target.required && e.target.value.trim().length === 0) {
      errorMessage = e.target.getAttribute("input-name") + " is required."
    } else if (!e.target.checkValidity()) {
      errorMessage = errorMessages[e.target.getAttribute("input-name")];
    }
    e.target.parentNode.querySelector(".error-message").textContent = errorMessage;
  };

  let errorMessageFieldFocus = function(e) {
    e.target.parentNode.querySelector(".error-message").textContent = "";
  };

  let invalidKeyPressName = function(e) {
    if (/[^a-z]/i.test(e.key)) e.preventDefault();
  };

  let invalidKeyPressCreditCard = function(e) {
    if (/[^0-9]/.test(e.key)) e.preventDefault();
  };

  let automaticTab = function(e) {
    let $input = $(e.target);
    if ($input.val().length == $input.attr("maxlength")) {
      let $nextInput = $input.nextAll("input")[0];
      if ($nextInput) $nextInput.focus();
    }
  };

  $form.on("blur", "input:not([type='submit'])", errorMessageFieldBlur);
  $form.on("focus", "input:not([type='submit'])", errorMessageFieldFocus);
  $form.on("keypress", "input.name", invalidKeyPressName);
  $form.on("keypress", "input[name='credit-card']", invalidKeyPressCreditCard);
  $form.on("keyup", "input[name='credit-card']", automaticTab);

  let formDataToJson = function(data) {
    const json = {};
    let creditCard = "";

    for (let pair of data.entries()) {
      if (pair[0] === "credit-card") {
        creditCard += (pair[1])
      } else {
        json[pair[0]] = pair[1].trim();
      }
    }
    json["credit-card"] = creditCard;
    return json;
  };

  let extractCreditCard = function(data) {
    let split = data.split("credit-card=");
    let ccn = split.slice(1).flatMap(sequence => sequence.match(/[0-9]/g)).join("");
    return split[0] + "credit-card=" + ccn;
  }

  let submitForm = function(e) {
    let data = $(e.target).serialize();
    data = extractCreditCard(data);
    $.post( $form.action, function(data) {
      $( ".result" ).html( data );
    })
  };

  let allInputsValid = function() {
    return [...$inputs].every(input => input.checkValidity());
  };
  //
  $form.on("submit", function(e) {
    e.preventDefault();
    if (allInputsValid()) {
      submitForm(e);
    } else {
      $inputs.trigger("blur")
      alert("Please fill in missing fields");
    }
  });
});
