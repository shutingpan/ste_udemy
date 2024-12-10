/** Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array */

//  Not good presented solution
function maxSubarraySum(arr, num) {
  // Edge case
  if (num > arr.length) {
    return null;
  }

  // Account for array with all negative numbers
  let max = -Infinity;

  // arr.length - num + 1 is the last index to start the sum range
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;

    // Sum numbers
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp; // updates max
    }
  }

  return max;
}

// Good presented solution
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  // Create sum for first num numbers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Move along array from num
  for (let i = num; i < arr.length; i++) {
    // substract head no. and add tail no., then compare
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
