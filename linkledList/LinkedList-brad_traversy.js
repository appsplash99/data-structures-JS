// Brad Traversy
// https://www.youtube.com/watch?v=ZBdE8DElQQU

/*
Linked List:
  head                          
    |                             
    |                             
+---+---+     +---+---+     +---+------+  
| 1 | o-----> | 2 | o-----> | 3 | NULL |  
+---+---+     +---+---+     +---+------+      
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert node at last node
  insertLast(data) {
    let node = new Node(data);
    if (this.head == null) { // if empty, make head
      this.head = data;
    } else {
      let current = this.head; // start at the beginning
      while (current.next) { // loop till current.next != null
        current = current.next // traversing to next node
      }
      current.next = node; // add the item at last
    }
    this.size--;
  }

  // Insert node at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) { // when index is out of range
      return;
    } else if (this.size == 0) { // when list is empty
      this.head = data;
      this.size++;
      return;
    } else if (index === 0) { // if first index
      insertFirst(data);
      return;
    }
    const node = new Node(data);
    let current, previous;
    current = this.head; // Set current to first
    let count = 0;
    while (count < index) {
      previous = current; // node before the index
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
    return;
  }

  // Get node at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        return console.log(current.data);
      }
      current = current.next;
      count++;
    }
    return null;
  }

  // Remove node at index
  removeAt(index) {
    if (index>0 && index>this.size ) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    
    // if first
    if (index== 0) {
      this.head = current.next;
    } else {
      while (count<index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // Clear List
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print List Data
  printListData() {
    let current = this.head;
    // iterating till current becomes null
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// testing
const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200)
ll.insertFirst(300)

ll.insertLast(500)

ll.insertAt(data = 'COOL', index = 2)

// ll.printListData()

ll.getAt(3)