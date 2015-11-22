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
  if (this.value === val) {
    return true;
  }
  if (val > this.value) {
    this.right.contains(val); 
  }
  if (val < this.value) {
    this.left.contains(val); 
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(cb){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

