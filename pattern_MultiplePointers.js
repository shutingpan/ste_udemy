/** Write a function called sumZero which accepts a sorted array of itnegers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist */

// Going from left and from right
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // if sum > 0, sum is too big, reduce upper value (rmb array is sorted)
      right--;
    } else {
      // if sum < 0, sum is too small, increase lower value
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3]));

/** Implement a function countUniqueValues which accepts a sorted array, and counts the unique values in the array, but it will always be sorted */

// Personal solution: passed (does not modify array)
// function countUniqueValues(sortedArray) {
//   let numOfUniques = 0;

//   if (sortedArray.length === 0) {
//     return numOfUniques;
//   } else {
//     numOfUniques = 1;
//   }

//   let left = 0;
//   let right = sortedArray.length - 1;

//   while (left < right) {
//     if (sortedArray[left] !== sortedArray[left + 1]) {
//       numOfUniques++;
//     }

//     left++;
//   }
//   return numOfUniques;
// }

// Presented solution - modifies array
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

[1, 2, 3, 4];

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
