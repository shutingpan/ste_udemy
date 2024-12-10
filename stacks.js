// Array implementation of stack
// let stack = [];
// stack.push("google");
// stack.push("youtube");
// stack.push("instagram");

// console.log(stack);

// stack.pop();

// console.log(stack);

// stack.unshift("create new file");
// stack.unshift("resize file");

// console.log(stack);

// stack.shift();

// Stack implementation using Singly Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Adding and removing from beginning of list (for constant time)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push("Harry");
stack.push("Ron");
stack.push("Hermione");
stack.pop();
console.log(stack);
