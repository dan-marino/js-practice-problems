function nodeSwap(id1, id2) {
  node1 = document.getElementById(id1)
  node2 = document.getElementById(id2)

  if (!node1 || !node2 || node1.contains(node2) || node2.contains(node1)) return 'gotcha';


  node1Clone = node1.cloneNode(true);
  node2Clone = node2.cloneNode(true);

  node1.parentNode.replaceChild(node2Clone, node1);
  node2.parentNode.replaceChild(node1Clone, node2);
}
