/* --------------------------------- Queues --------------------------------- */
class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new CustomNode(value);
    this.length++;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    this.last.next = newNode;
    this.last = newNode;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
      return;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
  isEmpty() {
    if (this.length === 0) return true;
    return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Jesús');
myQueue.enqueue('Annie');
myQueue.enqueue('Tirsa');
myQueue.enqueue('Teresa');
myQueue.dequeue();
console.log(myQueue);
