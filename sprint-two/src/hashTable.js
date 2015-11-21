var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //console.log(k, v);
  var bucket = this._storage[i];

  if (!bucket) {
    bucket = [];
    this._storage[i] = bucket;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k){
       tuple[1] = v;
       return;
    }
  } 

  bucket.push([k,v]);
  console.log(bucket);
  //see if key exist 
  //if exist update value
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      delete bucket[i][0];
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
