function walk(node, callback, level, array = []) {

  for (var i = 0; i < node.children.length; i++) {
    if (callback(node.children[i], level)) array.push(node.children[i]);
    walk(node.children[i], callback, level, array)
  }

  return array
}

function findGenerations(node, level) {
  while (level !== 0 && node) {
    node = node.parentNode;
    level--;
  }

  return (node && node.nodeName === "BODY")
}

function colorGeneration(level) {
  removeColor();
  let generations = walk(document.body, findGenerations, level)
  generations.forEach(element => element.classList.add("generation-color"))
};

function removeColor() {
  let colored = document.getElementsByClassName("generation-color");
  if (colored.length > 0) {
    [...colored].forEach(element => element.classList.remove("generation-color"));
  }
};
