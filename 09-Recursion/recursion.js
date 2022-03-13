/* -------------------------------- Recursion ------------------------------- */

let counter = 0;

const inception = () => {
  // Base Case
  if (counter > 3) {
    // Return => Stops
    return 'done';
  }
  counter++;
  // Recursive Case and bubble up when reach the base case
  return inception();
};

console.log(inception()); // done

const findFactorialRecursive = (x) => {
  if (x === 2) {
    return 2;
  }
  return x * findFactorialRecursive(x - 1);
};

const findFactorialIterative = (x) => {
  let answer = 1;
  if (x === 2) {
    answer = 2;
  }
  for (let i = 2; i <= x; i++) {
    answer = answer * i;
  }
  return answer;
};

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(3)); //2

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(3)); //8

function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  }
  return reverseStringRecursive(str.slice(1)) + str[0];
}

function reverseStringIterative(str) {
  let answer = '';
  for (const character of str) {
    answer = character + answer;
  }
  return answer;
}

console.log(reverseStringIterative('Hola Mundo'));
console.log(reverseStringRecursive('Hola Mundo'));
