const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
const nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
function arrayToNodes(nodes) {
  let parent = document.createElement(nodes[0].toLowerCase());
  let children = nodes[1];

  for (var i = 0; i < children.length; i++) {
    parent.append(arrayToNodes(children[i]));
  }

  return parent
}
