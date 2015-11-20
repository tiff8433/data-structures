var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(val){
  this.storage[this.count++] = val;
};

Stack.prototype.pop = function(){
  if( this.size() ){
    this.count--;
    var holder = this.storage[this.count];
    delete this.storage[this.count];
    return holder;
  }
};

Stack.prototype.size = function(){
  return this.count;
};

var plates = new Stack();