// document.addEventListener("DOMContentLoaded", function() {
  function traceDom(nodeID, array = []) {
    node = document.getElementById(nodeID)
    if (!node) return array;

    array.push([[...node.parentNode.children].map((element) => element.nodeName)]);
    traceDom(node.parentNode.id, array)
    return array
  }

// });
