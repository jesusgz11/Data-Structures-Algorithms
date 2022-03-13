/* --------------------------------- Stacks --------------------------------- */
class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return console.log(this.top);
  }
  push(value) {
    const newNode = new CustomNode(value);
    this.length++;
    if (!this.bottom) {
      this.top = newNode;
      this.bottom = newNode;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('You cant pop anything the stack is empty');
      return;
    }
    if (this.top === this.bottom) this.bottom = null;
    const prevTop = this.top;
    this.top = prevTop.next;
    this.length--;
  }
  isEmpty() {
    if (this.length === 0) return true;
    return false;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
console.log(myStack);

/* ------------------------------ Stacks Array ------------------------------ */

class StackArray {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    this.data.pop();
  }
}

const myArrayStack = new StackArray();

myArrayStack.push('google');
myArrayStack.push('udemy');
myArrayStack.push('discord');
myArrayStack.peek();
myArrayStack.pop();
console.log(myArrayStack);
