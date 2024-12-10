// UTF-8 codes
console.log("a".charCodeAt(0));
console.log("hi".charCodeAt(0)); // for h
console.log("hi".charCodeAt(1)); // for i

// Hash that works on strings only - basic hash func. not constant time, could be a little more random for even distribution
function hash(key, arrayLen) {
  let total = 0;
  // Loop through characters in key
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// prime nums help to spread out the keys more uniformly.
// helpful if array also has a prime length

function betterHash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  // Limit loop to 100 characters
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 10));
console.log(hash("cyan", 10));

console.log(betterHash("pink", 13));
console.log(betterHash("cyan", 13));
