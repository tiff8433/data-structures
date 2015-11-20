var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count++] = value;
};

stackMethods.pop = function() {
  if(this.count) {
    this.count--;
    var holder = this.storage[this.count];
    delete this.storage[this.count];
    return holder;
  }
};

stackMethods.size = function() {
  return this.count;
};