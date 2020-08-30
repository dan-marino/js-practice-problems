let count = 0;

function walk(node) {
  count += 1

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i])
  }
}

walk(document.body);

console.log(count);
