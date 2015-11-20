var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    if( list.head === null){
      list.head = node;
    }
    list.tail = node;
    list.head.next = node;
  };

  list.removeHead = function(){
    var newHead = list.head.next;
    var oldHead = list.head.value;
    delete list.head;
    list.head = newHead; 
    return oldHead;
  };

  list.contains = function(target){
    var current = list.head;
    while(current){
      if(current.value === target){
        return true;
      } else {
        current = current.next
      }
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
