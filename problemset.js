/** Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N) */

// Personal solution (passed)
// function sameFrequency(int1, int2) {
//   let int1Str = int1.toString();
//   let int2Str = int2.toString();

//   if (int1Str.length !== int2Str.length) return false;

//   let int1Freq = {};
//   let int2Freq = {};

//   for (let idx = 0; idx < int1Str.length; idx++) {
//     int1Freq[int1Str[idx]] = (int1Freq[int1Str[idx]] || 0) + 1;
//   }

//   for (let idx = 0; idx < int2Str.length; idx++) {
//     int2Freq[int2Str[idx]] = (int2Freq[int2Str[idx]] || 0) + 1;
//   }

//   // console.log(int1Freq, int2Freq);

//   for (let key in int1Freq) {
//     if (int1Freq[key] !== int2Freq[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// Presenter solution
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

/** Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern. */

// Personal solution
function areThereDuplicates(...args) {
  let freqCounter = {};

  for (let i = 0; i < args.length; i++) {
    freqCounter[args[i]] = (freqCounter[args[i]] || 0) + 1;
  }

  for (let key in freqCounter) {
    if (freqCounter[key] > 1) {
      return true;
    }
  }

  return false;
}

// Presenter solution
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true

/** Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. */

// Personal solution (passed)
function averagePair(sortedArray, targetAvg) {
  let first = 0;
  let second = sortedArray.length - 1;

  if (sortedArray.length < 2) {
    return false;
  }

  while (first < second) {
    let avg = (sortedArray[first] + sortedArray[second]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      first++;
    } else {
      second--;
    }
  }
  return false;
}

// Presented solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/**Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. */

// Personal solution (passed)
function isSubsequence(str1, str2) {
  let idx = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[idx] === str2.charAt(i)) {
      idx++;
    }
  }
  console.log(idx, str1.length);
  if (idx !== str1.length) {
    return false;
  }
  return true;
}

// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters))

// ----------------  Sliding Window Qns

/**Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints:

Time Complexity - O(N)

Space Complexity - O(1) */

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length === 0) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum || null;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
