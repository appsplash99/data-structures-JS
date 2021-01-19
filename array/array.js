/*source - https://www.geeksforgeeks.org/implementation-of-array-class-in-javascript/*/

/* Array methods
push()                - appending element at end of array
pop()                 - remove last element from array
insertAt()            - insert new item at certain index
deleteAt()            - delete an element with its index
getElemAtIndex()      - returns element from index
*/

class MyArray {           // user defined class

  constructor() {       // creating constructor
    this.length = 0;    // stores lengthn of array
    this.data = {}      // object to store elements
  }

  // push method - O(1)
  push(element) {
    this.data[this.length] = element;     // appending element at end of array
    this.length++;                        // incrementing length
    return this.data;
  }

  // pop method - O(1)
  pop() {
    let item = this.data[this.length-1]   // storing last item
    delete this.data[this.length-1]       // deleting last item in array
    this.length--;                        // decrementing array size
    return this.data;
  } 

  // insertAt - O(n)
  insertAt(index, item) {
    for (let i=this.length; i>=index; i--) {    // traversing the array from array size to index
      this.data[i] = this.data[i-1];            // shifting each element to previous position by one index 
    }
    this.data[index] = item;                    // inserting item at index
    this.length++;
    return this.data
  }

  // deleteAt - O(n)
  deleteAt(index) {
    for (let i=index; i<this.length-1; i++) {   // traversing array from index value to end of array
      this.data[i] = this.data[i+1];            // copying the next element to index i
    }
    delete this.data[this.length-1];            // deleting last element which is a duplicate of second last element
    this.length--;
    return this.data;
  }

  // getElementAtIndex() - O(1)
  getElementAtIndex(index) {
    return this.data[index];
  }
}


var 


