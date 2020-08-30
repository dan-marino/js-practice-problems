document.addEventListener("DOMContentLoaded", function(){
  function countIndirectChildren(node, total) {
    total[0] += node.children.length

    for (var i = 0; i < node.children.length; i++) {
      countIndirectChildren(node.children[i], total)
    }
  }

  function childNodes(nodeID) {
    let node = document.getElementById(nodeID)
    let indirectChildren = [0];

    countIndirectChildren(node, indirectChildren);
    return [node.children.length, indirectChildren[0]];
  }

});
