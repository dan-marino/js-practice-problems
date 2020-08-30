document.addEventListener("DOMContentLoaded", function() {
  let cancelSchedule = function(scheduleId) {
    let request = new XMLHttpRequest();
    request.open("DELETE", "./api/schedules/:" + scheduleId);

    request.addEventListener("load", function() {
      if (request.status === 204) alert("The schedule has been deleted");
      else alert(request.responseText)
    });

    request.send();
  };

  let cancelBooking = function(bookingId) {
    let request = new XMLHttpRequest();
    request.open("PUT", "./api/booking/:" + bookingId);

    request.addEventListener("load", function(e) {
      if (request.status === 204) alert("The booking has been deleted.");
      else alert(request.responseText)
    });

    request.send();
  };
});
