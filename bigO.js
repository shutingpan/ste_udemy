// Function to calc sum of all numbers from 1 to including n
function addUpTo(n) {
  let total = 0; // 1 assignment
  for (let i = 0; i <= n; i++) {
    // n additions, n + 1 assignments, n comparisons (for loop declaration)
    total += i;
    // n additions, n assignments (loop body)
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2; // 3 operations
}

function timeElapsed(codeFunction, ...args) {
  let t1 = performance.now();
  codeFunction(...args);
  let t2 = performance.now();
  console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
}

timeElapsed(addUpTo, 3);
timeElapsed(addUpTo2, 3);
