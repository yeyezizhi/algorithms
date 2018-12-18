function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length;;
  while (left <= right) {
    let middle = left + (right - left) / 2;
    if (arr[middle] < val) {
      left = middle + 1;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      right = middle;
    }
  }

  return left
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(binarySearch(a, 8))