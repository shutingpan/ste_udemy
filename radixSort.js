// return digit in number at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

  // Math.abs to work with negative numbers
  // divide by Math.pow to make desired digit in 0th place
  // Math.floor to remove decimals
  // % 10 to get remainder aka desired digit
}

console.log(getDigit(7323, 2));
console.log(getDigit(7323, 12));

// For base 10 numbers, return number of digits in number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(423));

// return no. of digits in largest numbers in a given array
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([23, 567, 89, 123414134, 90]));

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  // For max no. of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // Create array of 10 empty arrays
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // For each number
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    console.log(digitBuckets);
    // Reassign nums. pass in every element in digitBuckets as args
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
