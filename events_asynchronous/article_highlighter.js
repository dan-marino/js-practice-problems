function highlight(event) {
  highlighted.classList.remove("highlight");
  let section = (event.target) ? event.target.parentNode : event
  section.classList.add("highlight");
  highlighted = section;
}

let articles = document.querySelector("main");
let nav = document.querySelector("header ul");
let highlighted = document.body;

articles.addEventListener("click", highlight);

nav.addEventListener("click", function(event) {
  let link = event.target.href;
  let id = String(link).match(/\#.*$/);
  let article = document.querySelector(id);
  highlight(article);
});
