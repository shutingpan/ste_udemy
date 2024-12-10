function bubbleSort(arr) {
  let noSwaps; // for optimization : if noSwaps, meaning array alr sorted
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([23, 9, 8, 70, 17]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // exclude redundant swaps if lowest alr in place of i
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([13, 2, 8, 70, 17]));

function insertionSort(arr) {
  let j; // workaround instead of using var

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // compare currentVal with left sorted portion of array (go from right to left)
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; // move forward
    }

    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
