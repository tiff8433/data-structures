var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};  
  this.last = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(val){
  this.storage[this.last++] = val;
};

Queue.prototype.dequeue = function(){
  var holder = this.storage[this.first];
  if( this.size() ) {
    delete this.storage[this.first];
    this.first++;
  }
  return holder;
};

Queue.prototype.size = function(){
  return this.last - this.first;
};


var Plates = new Queue();