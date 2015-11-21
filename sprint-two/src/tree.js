var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


console.log(this.value)


var treeMethods = {};

treeMethods.addChild = function(value){
  //console.log(value);
  this.children.push(Tree(value));
  //=console.log(this.children)

};

treeMethods.contains = function(target){
  var results = false;
  if(this.value === target){
    results = true;
  }

  if(this.children.length){
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].contains(target)){
        results = true;
      }
    }
  }
  return results;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */