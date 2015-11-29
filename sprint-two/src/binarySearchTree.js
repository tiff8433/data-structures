var BinarySearchTree = function(value){
  var newBinarySearchTree = Object.create(binarySearchTreeMethods);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left;
  newBinarySearchTree.right;
  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(val){
  if (val < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(val);
      return;
    } else {
      this.left.insert(val);
    }
  }

  if (val > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(val);
      return;
    } else {
      this.right.insert(val);
    }
  }

  //if found insertion point
    //create new node
  //if value to be inserted < this value
    // go left
    // else go right
};

binarySearchTreeMethods.contains = function(val){
  if (this.value === val){
    return true;
  } else if (this.value < val){
    if(!this.right) {
      return false;
    } else {
      return this.right.contains(val);
    }
  } else if (this.value > val) {
    if(!this.left){
      return false;
    } else {
      return this.left.contains(val);
    }
  }
};

binarySearchTreeMethods.depthFirstLog = function(cb){
  cb(this.value);
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
    if (this.left) {
    this.left.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

