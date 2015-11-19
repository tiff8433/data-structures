var Queue = function(){
  var someInstance = {};
  var dequeueCount = 0;
  var enqueueCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[enqueueCount++] = value;
  };

  someInstance.dequeue = function(){
    var holder = storage[dequeueCount];
    if((enqueueCount - dequeueCount) > 0) {
      delete storage[dequeueCount];
      dequeueCount++;
    }
    return holder;
  };

  someInstance.size = function(){
    return enqueueCount - dequeueCount;
  };

  return someInstance;
};
