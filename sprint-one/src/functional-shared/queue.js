var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.last = 0;
  newQueue.first = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last++] = value;
};

queueMethods.dequeue = function() {
  if (this.size()) {
    var holder = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
  }
  return holder;
};

queueMethods.size = function() {
  return this.last - this.first;
};

