function merge(sortedArray1, sortedArray2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < sortedArray1.length && j < sortedArray2.length) {
    if (sortedArray2[j] > sortedArray1[i]) {
      results.push(sortedArray1[i]);
      i++;
    } else {
      results.push(sortedArray2[j]);
      j++;
    }
  }

  // Put in remaining items
  while (i < sortedArray1.length) {
    results.push(sortedArray1[i]);
    i++;
  }

  while (j < sortedArray2.length) {
    results.push(sortedArray2[j]);
    j++;
  }

  return results;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([], [1, 3]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
