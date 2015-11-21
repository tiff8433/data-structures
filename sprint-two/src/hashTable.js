var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(k, v);
  this._storage[i] = v;


  //check if there is a buckett
  //if no bucket make one

  // if there is a bucket
  // key exisit
  // update

  //create tuple 
  //add tuple 
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]){
    return this._storage[i];
  } 
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i]
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
