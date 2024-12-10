class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // If no head, nothing to pop
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    //  Loop through list until reach tail, set newTail to be 2nd last item. current will be last item
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Set new tail to be 2nd last item, and sever connection to last item.
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // When popping for length = 1, decrement leads to 0 but head and tail still exist.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    // When shifting for length = 1, decrement leads to 0 but tail still exist (as a Node not null).
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    // !! to coerce return values into boolean
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Print whole linked list in array (for debugging)
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    // Swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null; // want tail.next to be null
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
  // Print out every item
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

let list = new SinglyLinkedList();
console.log(list.push("Hello"));
console.log(list.push("Goodbye"));
console.log(list.push("!"));

// console.log(list.pop());

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// console.log(list.traverse());

// console.log(list.unshift("ADD ME"));
// console.log(list);

// console.log(list.get(2));

// console.log(list.set(-1, "new info"));
// console.log(list);

// console.log(list.insert(0, "red"));

// console.log(list.remove(0));

list.print();
list.reverse();
list.print();
