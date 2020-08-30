function nodesToArr() {
  function getChildren(parent) {
    return [parent.tagName, Array.from(parent.children).map(getChildren)];
  }

  return getChildren(document.body);
}
