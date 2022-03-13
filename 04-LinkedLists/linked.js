/* ------------------------------ Linked Lists ------------------------------ */

// reference

let obj1 = { a: true };
let obj2 = obj1;

delete obj1;

obj2 = "Hello"

console.log('1', obj1); // {a: 'booya'}
console.log('2', obj2); // Hello

/* ----------------------------- My Linked List ----------------------------- */

class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
    const newNode = new CustomNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new CustomNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Code here
    if (index >= this.length - 1) return this.append(value);
    if (index === 0) return this.prepend(value);
    const newNode = new CustomNode(value);
    let prevNode = this._traverseList(index);
    let currNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = currNode;
    this.length++;
  }
  deleteFirstNode() {
    let secondNode = this.head.next;
    this.head = secondNode;
    this.length--;
  }
  deleteLastNode() {
    let penultimateNode = this._traverseList(this.length - 1);
    penultimateNode.next = null;
    this.tail = penultimateNode;
    this.length--;
  }
  delete(index) {
    if (index >= this.length - 1) return this.deleteLastNode();
    if (index === 0) return this.deleteFirstNode();
    let prevNode = this._traverseList(index);
    let currNode = prevNode.next;
    prevNode.next = currNode.next;
    this.length--;
  }
  _traverseList(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(9, 98);
// myLinkedList.delete(2);
myLinkedList.reverse();
console.log(myLinkedList.printList());

// myLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 10,
//       next: {
//         value: 5,
//         next: {
//           value: 16,
//           next: null,
//         },
//       },
//     },
//   },
// };

/* --------------------------- Doubly Linked List --------------------------- */

class CustomDoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
    const newNode = new CustomDoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new CustomDoublyNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Code here
    if (index >= this.length - 1) return this.append(value);
    if (index === 0) return this.prepend(value);
    const newNode = new CustomDoublyNode(value);
    let prevNode = this._traverseList(index);
    let currIdxNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currIdxNode;
    currIdxNode.prev = newNode;
    this.length++;
  }
  deleteFirstNode() {
    let secondNode = this.head.next;
    secondNode.prev = null;
    this.head = secondNode;
    this.length--;
  }
  deleteLastNode() {
    let penultimateNode = this._traverseList(this.length - 1);
    penultimateNode.next = null;
    this.tail = penultimateNode;
    this.length--;
  }
  delete(index) {
    if (index >= this.length - 1) return this.deleteLastNode();
    if (index === 0) return this.deleteFirstNode();
    let prevNode = this._traverseList(index);
    let currIdxNode = prevNode.next;
    let nextNode = currIdxNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }
  _traverseList(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList2 = new DoublyLinkedList(10);

myLinkedList2.append(5);
myLinkedList2.append(16);
myLinkedList2.prepend(1);
myLinkedList2.insert(1, 98);
myLinkedList2.delete(1);
console.log(myLinkedList2.printList());