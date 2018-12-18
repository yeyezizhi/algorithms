class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this
  }

  prepend(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node
    }

    return this
  }

  contains(val) {
    let pointer = this.head;
    while (pointer && pointer.val !== val) {
      pointer = pointer.next
    }

    return !!pointer
  }

  remove(val) {
    if (!this.head) {
      return false
    }

    
  }
}

let linkedList = new LinkedList()

linkedList.add(1).add(2).prepend(3)

console.warn(JSON.stringify(linkedList), linkedList.contains(4))