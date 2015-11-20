var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val){
  this.storage[this.count++] = val;
};

stackMethods.pop = function(){
  if( this.size() ){
    this.count--;
    var holder = this.storage[this.count];
    delete this.storage[this.count];
    return holder;
  }
};

stackMethods.size = function(){
  return this.count;
};


