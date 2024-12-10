// Frequency counter concept: use objects to generate profie of an array or string and use objects to compare

/** Write a function called same, which accepts 2 arrays. FUnction should return true if every value in the array has it's corresponding value squared in the 2nd array. frequency of values must be the same */

// same([1, 2, 3], [4, 1, 9]); // true
// same([1, 2, 3], [4, 9]); // false
// same([1, 2, 1], [4, 4, 1]); // false

// Below code has 3 loops - time complexity of O(n)
function same(baseArray, sqauredArray) {
  let frequencyCounterBase = {};
  let frequencyCounterSquares = {};

  if (baseArray.length !== sqauredArray.length) {
    return false;
  }

  for (let val of baseArray) {
    frequencyCounterBase[val] = (frequencyCounterBase[val] || 0) + 1;
  }

  for (let val of sqauredArray) {
    frequencyCounterSquares[val] = (frequencyCounterSquares[val] || 0) + 1;
  }

  console.log(frequencyCounterBase, frequencyCounterSquares);

  // Match frequencies of base numbers and respective squares
  for (let key in frequencyCounterBase) {
    if (!(key ** 2 in frequencyCounterSquares)) {
      return false;
    }

    if (frequencyCounterSquares[key ** 2] !== frequencyCounterBase[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true

/** Anagram: Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman' */

// Personal solution to Anagram (passed)
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let freqCounter1 = {};
//   let freqCounter2 = {};

//   for (let val of str1) {
//     freqCounter1[val] = (freqCounter1[val] || 0) + 1;
//   }

//   for (let val of str2) {
//     freqCounter2[val] = (freqCounter2[val] || 0) + 1;
//   }

//   console.log(freqCounter1, freqCounter2);

//   for (let key in freqCounter1) {
//     if (!(key in freqCounter2)) {
//       return false;
//     }

//     if (freqCounter1[key] !== freqCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// Presented solution to Anagram
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // cant find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("awesome", "awesom")); //false
