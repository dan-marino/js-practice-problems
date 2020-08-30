function sliceTree(startID, endID) {
  let start = document.getElementById(startID);
  let end = document.getElementById(endID);
  if (!start || !end || !start.contains(end)) return;
  let array = [];

  while (end !== start.parentNode) {
    array.unshift(end.nodeName);
    end = end.parentNode;
  }

  return array;
}
