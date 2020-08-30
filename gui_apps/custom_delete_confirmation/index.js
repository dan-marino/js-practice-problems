const todos = [ "Homework", "Shopping", "Call Mom", "Coffee with John"];

document.addEventListener("DOMContentLoaded", function() {
  const ul = document.getElementById("todos");
  const overlay = document.querySelector(".overlay");
  const confirmPrompt = document.querySelector(".confirm_prompt");
  let li = document.getElementsByTagName("li");

  let todosTemplate = Handlebars.compile(document.getElementById("todos_template").innerHTML);
  let todosConfirmTemplate = Handlebars.compile(document.getElementById("confirm_template").innerHTML);
  ul.innerHTML = todosTemplate({todos});

  todosTemplate({todos});

  let clearPopUpandOverlay = function(e) {
    e.preventDefault();
    overlay.style.display = "none";
    confirmPrompt.style.display = "none";
  }

  document.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
      overlay.style.display = "block";
      confirmPrompt.style.display = "block";
      confirmPrompt.innerHTML = todosConfirmTemplate({ id: e.target.parentNode.getAttribute("data-id")});
    } else if (e.target.classList.contains("confirm_yes")) {
      clearPopUpandOverlay(e);
      let id = e.target.parentNode.parentNode.getAttribute("data-id");
      let todo = [...li].find(item => item.getAttribute("data-id") === id);
      ul.removeChild(todo);
    } else if (e.target.classList.contains("confirm_no") ||
               e.target.classList.contains("overlay")) {
      clearPopUpandOverlay(e);
    }
  });
});
