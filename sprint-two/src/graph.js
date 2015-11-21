

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.container = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  console.log(node);
    this.container[node] = {edge:[]};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){ 
  for(var key in this.container){
    if(key === node){
      return true;
    }
  }
  return false;    
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for(var key in this.container){
    if(key === node){
      delete this.container[key];
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.container[fromNode].edge.length; i++){
    if(this.container[fromNode].edge[i] === toNode){
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.container[fromNode].edge.push(toNode);
  this.container[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.container[fromNode].edge.length; i++){
    if(this.container[fromNode].edge[i] === toNode){
      delete this.container[fromNode].edge[i];
      delete this.container[toNode].edge[i];
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.container){  
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNode: constant
// contains: linear
// removeNode: linear
// hasEdge: linear
// addEdge: constant
// removeEdge: linear
// forEachNode: linear


