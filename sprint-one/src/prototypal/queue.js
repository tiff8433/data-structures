var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
  this.storage[this.last++] = val;
};

queueMethods.dequeue = function(){
  var holder = this.storage[this.first];
  if( this.size() ){
    delete this.storage[this.first];
    this.first++;
  }
  return holder;
};

queueMethods.size = function(){
  return this.last - this.first;
};