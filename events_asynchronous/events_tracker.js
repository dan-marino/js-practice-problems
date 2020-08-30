document.addEventListener("DOMContentLoaded", function() {
  const divRed = document.getElementById("red");
  const divBlue = document.getElementById("blue");
  const divOrange = document.getElementById("orange");
  const divGreen = document.getElementById("green");

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));

  const tracker = (function() {
    let list = [];

    return {
      list() {
        return [...list];
      },

      elements() {
        return list.map((event) => event.target);
      },

      clear() {
        list = [];
        return list.length;
      },

      add(event) {
        list.push(event);
      },
    }
  }());

  function track(callback) {
    return function(event) {
      event.stopPropagation();
      tracker.add(event);
      callback(event);
    }
  }

});
