class Heap {
  constructor(array) {
    this.heap = [null];
    if (array) {
      for (let ele of array) {
        this.insert(ele)
      }
    }
  }

  insert(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  remove() {
    if (heap.length <= 1) {
      return
    }

    this.heap[1] = this.heap[this.heap.length - 1]
    this.heap.splice(this.heap.length - 1, 1)
    this.heapifyDown()
  }

  heapifyUp() {
    if (this.heap.length <= 2) {
      return
    }
    let currentIndex = this.heap.length - 1;
    while (this.getParent(currentIndex) > 0 && this.heap[currentIndex] < this.parent(currentIndex)) {
      this.swap(currentIndex, this.getParent(currentIndex));
      currentIndex = this.getParent(currentIndex)
    }
  }

  heapifyDown() {
    let length = this.heap.length;
    if (length < 2) {
      return
    }

    let currentIndex = 1;
    let swapIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (this.heap[currentIndex] < this.getLeftChild(currentIndex)) {
        if (this.hasRightChild()) {
          if (this.heap[currentIndex] < this.getRightChild(currentIndex)) {
            return
          }

          swapIndex = currentIndex * 2 + 1
        } else {
          swapIndex = currentIndex * 2;
        }
      } else {
        swapIndex = currentIndex * 2;
      }

      this.swap(currentIndex, swapIndex)
      currentIndex = swapIndex
    }
  }

  getParent(index) {
    return Math.floor(index / 2)
  }

  parent(index) {
    return this.heap[this.getParent(index)]
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  hasLeftChild(index) {
    return 2 * index <= this.heap.length
  }

  hasRightChild(index) {
    return (2 * index + 1) <= this.heap.length
  }

  getLeftChild(index) {
    return this.heap[2 * index]
  }

  getRightChild(index) {
    return this.heap[2 * index + 1]
  }

  toString() {
    return this.heap.slice(1)
  }
}

let heap = new Heap([3, 4, 1, 5, 7, 9, 13, 35, 8])
console.log(heap.toString())
heap.remove()
console.log(heap.toString())