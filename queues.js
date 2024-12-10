// Method 1 - need reindex every shift
let q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");
console.log(q);
q.shift();
console.log(q);
q.shift();
console.log(q);

// Method 2 - need reindex every unshift
let q2 = [];
q2.unshift("FIRST");
q2.unshift("SECOND");
q2.unshift("THIRD");
console.log(q2);
q2.pop();
console.log(q2);
q2.pop();
console.log(q2);

// Queue implementation using Singly Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Adding and removing from beginning of list (for constant time)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
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

let queue = new Queue();
console.log(queue.enqueue("Harry"));
console.log(queue.enqueue("Ron"));
console.log(queue.enqueue("Hermione"));
console.log(queue.dequeue());
console.log(queue);
