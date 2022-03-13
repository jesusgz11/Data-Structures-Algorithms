/* -------------------------- Funtional Programming ------------------------- */
const a = [1, 2, 4, 6, 1, 100, 0, 10000, 3];

a.sort(function (a, b) {
  return a - b;
});

function binarySearch(arr, i) {
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === i) {
    return arr[mid];
  }
  if (arr[mid] < i && arr.length > 1) {
    return binarySearch(arr.splice(mid), i);
  }
  if (arr[mid] > i && arr.length > 1) {
    return binarySearch(arr.splice(0, mid), i);
  }
  return 'Not found';
}
const result = binarySearch(a, 100);

console.log(result);

/* ------------------------------- Memoization ------------------------------ */

// Not Memoized

function add(n) {
  console.log('Long Time');
  return n + 80;
}

// Memoized + Closure

function memoizedAdd() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    console.log('Long Time');
    cache[n] = n;
    return cache[n];
  };
}

const memoized = memoizedAdd();

add(5); // 85 + Long Time
add(5); // 85 + Long Time
memoized(5); // 85 + Long Time
memoized(5); // 85

/* -------------------------------- Fibonacci ------------------------------- */

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function fibonacci(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let counter = 0;

function fibonacciMaster() {
  const cache = {};
  return function fib(n) {
    counter++;
    if (n in cache) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

function fibonacciMaster2(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.pop();
}

const fibMaster = fibonacciMaster();
console.log(fibMaster(35));
console.log(fibonacciMaster2(35));
console.log(counter); // 69

/* ------------------------------ Robber House ------------------------------ */

const rob = function (arr) {
  let prevToPrev = arr[0],
    prev = Math.max(arr[0], arr[1]);
  if (arr.length === 0) return 0;
  if (arr.length === 1) return prevToPrev;

  for (let i = 2; i < arr.length; i++) {
    let current = Math.max(arr[i] + prevToPrev, prev);
    prevToPrev = prev;
    prev = current;
  }

  return prev;
};

rob([5, 5, 1]);
