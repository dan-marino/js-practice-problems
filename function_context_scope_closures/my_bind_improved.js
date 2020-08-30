let myBind = function(func, binding) {
  return function() {
    func.apply(binding, arguments)
  }
};
