function pivot(arr, start = 0, end = arr.length + 1) {
  // Swap function
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start; // # of items less than pivot

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      // console.log(arr);
    }
  }
  // Position pivot where it need to be
  swap(arr, start, swapIdx);
  // console.log(arr);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]); // return 3

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // return pivotIdx and organises arr
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
