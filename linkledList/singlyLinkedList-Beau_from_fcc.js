// Linked List - Beau teaches JavaScript
// https://www.youtube.com/watch?v=9YddVVsdG5A
/*
Linked List:
    head                          
      |                             
      |                             
  +---+---+     +---+---+     +---+------+  
  | 1 | o-----> | 2 | o-----> | 3 | NULL |  
  +---+---+     +---+---+     +---+------+      
  
  elem|next     elem|next     elem|next
*/

// Linked List constructor function
function LinkedList() {
  var length = 0;
  var head = null;

  // creating a node
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  // add method - O(n)
  // REMEMBER! - while adding a new node always:
  // keep a track of currentNode as well as previousNode,
  // while iterating over the linkedList
  this.add = function (element) {
    // creating a new node for the element
    var node = new Node(element);
    // if linked list is empty
    if (head === null) {
      head = element;
    } else {
      // starting at head node - ie beginning
      currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // after iterating all nodes
      // append the new node at the last position in LInked List
      currentNode = node;
    }
    length++;
  }

  // remove method - O(n)
  this.remove = function (element) {
    // always starting at head
    var currentNode = head;
    // tracking previous node
    var previousNode;
    // if element is at head node
    if (currentNode.element === element) {
      // point the head node to next node
      head = currentNode.next;
    } else {
      // serch till element not found
      while (currentNode.element !== element) {
        // saving previous node for next iteration
        previousNode = currentNode;
        // setting current node to next value to :
        // keep the while loop alive and non-infinite
        currentNode = currentNode.next;
      }
      // after iterating the linkedList till desired element
      // skip the present Node by
      // pointing the previous Node's pointer to
      // next Node's head
      previousNode.next = currentNode.next;
    }
    length--;
  }

  this.isEmpty = function() {
    return this.size === 0;
  }

  // indexOf method - O(n)
  this.indexOf = function(element) {
    // always start at the beginning
    var currentNode = head;
    var index = -1;
    // while there is a currentNode
    while(currentNode) {
      index++;
      // if element found
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    // if element not found
    return index;
  }

  // elementAt method - O(n)
  this.elementAt = function(index) {
    // instructor's logic
    // always start at head
    var currentNode = head;
    var count = 0;
    while(count < index) {
      count++;
      currentNode = currentNode.next;
    }
    // when the loop exits at count == index
    return currentNode.element

    // // CONFIRM THE BELO LOGIC
    // // MY LOGIC:
    // // always start at head
    // var currentNode = head;
    // var count = -1;
    // // if currentNode exists
    // while(currentNode) {
    //   count++;
    //   if (count === index) {
    //     return currentNode.element;
    //   }
    //   currentNode = currentNode.next;
    // }
  }

  // addAt method - O(n)
  // REMEMBER! - to implement addAt method always: 
  // keep track of previousNode and currentNode,
  // while iterating over the linkedList
  this.addAt = function(index, element) {
    // instructor's Logic
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length) {
      return false;
    };

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentNode < index) {
        currentNode++;
        // keeping track of previousNode and currentNode for each iteration
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // pointing previousNode to new Node
      previousNode.next = node;
      // pointing new Node to currentNode in linked list
      node.next = currentNode; 
    }
    length++;

    // // CONFIRM
    // // MY LOGIC
    // // creating a node with the element
    // var node = new Node(element);
    
    // // always start at the beginning
    // var currentNode = head;
    // var previousNode;
    // var count = 0;

    // // if linkedList is empty
    // if (currentNode.next === null) {
    //   currentNode = node;
    //   node.next = null;
    // } else {
    //   while(count < index) {
    //     count++;
    //     previousNode = currentNode;
    //     currentNode = currentNode.next;
    //   }
    //   // at last iteration, count == index
    //   // pointing previousNode to new Node
    //   previousNode.next = node;
    //   // pointing new node to currentNode of linkedList
    //   node.next = currentNode; 
    // }
    // length++;    
  }

  // removeAt method - O(n)
  this.removeAt = function(index) {
    // always begin at head
    var currentNode = head;
    var previousNode;
    var count = 0;

    if (index < 0 || index >= length) {
      return null;
    } 
    if (index === 0){
      head = currentNode.next;
    } else {
      while(count < index) {
        count++;
        previousNode = currentNode
        currentNode = currentNode.next;
      }
      // when count == index
      previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }
}

// testing LinkedList




