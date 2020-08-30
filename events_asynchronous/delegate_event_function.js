document.addEventListener("DOMContentLoaded", function() {
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');
  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };

  function correctMatch(e, selector) {
    return [...e.currentTarget.querySelectorAll(selector)].includes(e.target)
  }

  function delegateEvent(parentElement, selector, eventType, callback) {
    if (!parentElement && !(parentElement instanceof Element)) return;
    parentElement.addEventListener(eventType, function(e) {
      if (correctMatch(e, selector)) callback(e);
    });
    return true;
  }
  //
  // const newP = document.createElement('P');
  // const newContent = document.createTextNode('New Paragraph');
  // newP.appendChild(newContent);
  //
  // element2.appendChild(newP);

  // delegateEvent(element1, 'p', 'click', callback);
  // delegateEvent(element2, 'p', 'click', callback);
  // delegateEvent(element2, 'h1', 'click', callback);
  // delegateEvent(element3, 'h1', 'click', callback);
  delegateEvent(element3, 'aside p', 'click', callback);
  // delegateEvent(element2, 'p', 'click', callback);
});
