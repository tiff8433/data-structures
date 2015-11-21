var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //if storage is undefined give it a value obj/arr
  //else add to storage
  if(this._storage === undefined) {
    this._storage = [];
  }
  if (_.indexOf(this._storage, item) === -1) {
    this._storage.push(item);  
  }
};

setPrototype.contains = function(item){
  return _.contains(this._storage, item);


  // check if item = item
  //return true
  //else false
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      delete this._storage[i];
    }
  }
  //find item
  //delete item
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// add: linear
// contains: linear
// remove: linear