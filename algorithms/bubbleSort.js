function bubbleSort(arr, comparator = (a, b) => a - b > 0 ? true : false) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (comparator(arr[j], arr[j + 1])) {
        arr.swap(j, j + 1)
      }
    }
  }
}

Array.prototype.swap = function(a, b) {
  [this[a], this[b]] = [this[b], this[a]]
}

let arr = [1, 3, 4, 6, 2, 7, 9, 8]
bubbleSort(arr, (a, b) => a - b > 0 ? false : true)
console.log(arr)