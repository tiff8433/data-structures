var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count++] = value;
  };

  someInstance.pop = function(){
    if(count) {
      count--;
      var item = storage[count];
      delete storage[count];
      return item;
    }

  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};


