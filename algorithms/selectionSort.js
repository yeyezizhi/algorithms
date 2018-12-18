function selectionSort(arr, comparator = (a, b) => a - b > 0 ? true : false) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let index = i;
    for (let j = i + 1; j < length; j++) {
      if (comparator(arr[index], arr[j])) {
        index = j;
      }
    }

    if (i !== index) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
    }
  }
}

let arr = [1, 3, 4, 6, 2, 7, 9, 8]
selectionSort(arr, (a, b) => a - b > 0 ? false : true)
console.log(arr)