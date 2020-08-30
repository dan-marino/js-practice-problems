let myBind = function(func, binding, ...args) {
  return function() {
    func.apply(binding, [...args, ...arguments]);
  }
};
