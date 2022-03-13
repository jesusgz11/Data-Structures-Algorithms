/* ------------------------------- Big O O(n) ------------------------------- */
const nemo = ['nemo'];

const large = new Array(1000).fill('nemo');

const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];

// NOTE:

/*
  BigO Means how much time findNemo function takes to run
  so this function Big O is O(n) => Linear wich means as the number
  of inputs increases the number of operations too
*/

const findNemo = (array) => {
  let t0 = performance.now();
  array.forEach((element) => {
    if (element === 'nemo') {
      console.log('Found NEMO!');
      return;
    }
  });
  let t1 = performance.now();
  console.log(`Call to find nemo took ${t1 - t0} milliseconds`);
};

findNemo(everyone); // O(n) => Linear

// NOTE:

/*
  Big O O(1) means always the number of operations stays flat
  and no matter if we perform more than one operation in one function
  the notation always be O(1)
*/

/* ------------------------------- Big O O(1) ------------------------------- */

const boxes = [1, 2, 3, 4, 5, 6];

const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // 0(2) => 0(1)

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) {
//     // O(n)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(1)
// }

// funChallenge(); // O(3 + 4n) => O(n)

// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     // O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     // O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// anotherFunChallenge(); // O(4+7n) => O(n)

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]);

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++) {
//     console.log('hi');
//   }
// }

// printFirstItemThenFirstHalfThenSayHi100Times(); // O(1+n/2 + 100) => 0(n/2 + 101) => O(n/2 + 1) => O(n+1) => O(n)

const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach((box) => {
    console.log(box);
  });
  boxes2.forEach((box) => {
    console.log(box);
  });
};

compressBoxesTwice([1, 2], [1]); // O(a + b)

/* ------------------------------ Big O O(n^2) ------------------------------ */

//Log all pairs of array

const boxes2 = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  array.forEach((firstBox) => {
    array.forEach((secondBox) => {
      console.log(firstBox, secondBox);
    });
  });
}

logAllPairsOfArray(boxes2); // O(n*n) => O(n^2)

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n + n^2) => O(n^2)

// function breakMyBrowser(n) {
//   for (let i = 0; i < n; i++) {
//     breakMyBrowser(n - 1);
//   }
// }

// breakMyBrowser(7);

/* ---------------------------- Space Complexity ---------------------------- */

// Space complexity O(1)
function scaryFn(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo');
  }
}

scaryFn([1, 2, 3, 4, 5]); // booooo x5

// Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // ['hi',x5]

/* -------------------------------- Exercise -------------------------------- */

/*
  Given 2 arrays create a function that lets a user know (true/false) whether
  this two arrays contain any common items.

  Example:
  const arr1 = ['a','b','c','x'];
  const arr2 = ['z','y','i'];
  searchCommonItems() => false

  const arr3 = ['a','b','c','x'];
  const arr4 = ['z','y','x'];
  searchCommonItems() => true
*/

const searchCommonItems = (arr1, arr2) => {
  const map = {};
  let hasCommonItems = false;

  arr1.forEach((item) => {
    if (!map[item]) {
      map[item] = true;
    }
  });

  arr2.forEach((item) => {
    if (map[item]) hasCommonItems = true;
  });
  return hasCommonItems;
};

console.log(searchCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])); //O(a+b)

const searchCommonItems2 = (arr1, arr2) =>
  arr1.some((item) => arr2.includes(item));

console.log(searchCommonItems2(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])); //O(a+b)

/* ------------------------------ Google Answer ----------------------------- */
// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 6, 2, 1, 7], 9);
