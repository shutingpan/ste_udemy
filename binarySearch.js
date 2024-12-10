/** Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1. */

function binarySearch(sortedArray, val) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    // console.log(left, middle, right);
    if (sortedArray[middle] === val) return middle;
    if (sortedArray[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1
