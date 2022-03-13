/* ------------------------- Data Structures Arrays ------------------------- */

const strings = ['a', 'b', 'c', 'd'];

// Access

strings[2]; // O(1)

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n/2) => O(n)

console.log(strings);

/* ----------------------------- Reverse String ----------------------------- */

function reverseString3(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

const reverseString2 = (str) => {
  if (!str || typeof str != 'string' || str.length < 2) return str;
  let reversedStr = '';
  for (const letter of str) {
    reversedStr = letter + reversedStr;
  }
  return reversedStr;
};

const reverseString = (str) => {
  if (!str || typeof str != 'string' || str.length < 2) return str;
  return [...str].reverse().join('');
};

console.log(reverseString('Hi my name is Jesus!'));

/* ------------------------- Merge Two Sorted Arrays ------------------------ */

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  let i = 0;
  let j = 0;

  let array1Item = array1[i];
  let array2Item = array2[j];

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i + 1];
      i++;
      continue;
    }
    mergedArray.push(array2Item);
    array2Item = array2[j + 1];
    j++;
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31, 35], [2, 3, 4, 6, 30]));

/* -------------------------------- Two Sums -------------------------------- */

/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSums(listNumbers, target) {
  if (!Array.isArray(listNumbers)) {
    return 'Please provide an array';
  }

  if (listNumbers.length < 2) {
    return 'Not enough numbers to check';
  }

  const subs = new Map();
  const result = [];

  listNumbers.forEach((number, idx) => {
    const numberExist = subs.get(number);
    if (numberExist || numberExist === 0) {
      result.push(numberExist, idx);
    } else {
      subs.set(target - number, idx);
    }
  });

  if (result.length === 0) {
    return 'Not sums found';
  }
  return result;
}

console.log(twoSums([2, 11, 15, 6, 8, 1], 9));

/* ---------------------------- Improved Two Sums --------------------------- */

const twoSum = function (nums, target) {
  const subs = {};
  for (i = 0; i < nums.length; i++) {
    const element = nums[i];
    const sumIdx = subs[element];
    if (sumIdx || sumIdx === 0) {
      return [sumIdx, i];
    }
    subs[target - element] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

/* --------------------------------- Move 0 --------------------------------- */

function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === 0) {
      nums.push(...nums.splice(i, 1));
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

/* --------------------------- Contains Duplicate --------------------------- */

const containsDuplicate = function (nums) {
  const duplicate = new Set();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const searchValue = duplicate.has(element);
    if (searchValue || searchValue === 0) {
      return true;
    }
    duplicate.add(element);
  }
  return false;
};

/* ------------------------------ Rotate Array ------------------------------ */

const revNums = function (nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const rotate = function (nums, rotates) {
  // prevent when number of rotates is greater than length
  rotates = rotates % nums.length;
  // Rerverse whole array
  nums.reverse();
  // search for number of rotates on array index then rotate it
  revNums(nums, 0, rotates - 1);
  revNums(nums, rotates, nums.length - 1);
};

/* ------------------------------ Max Subarray ------------------------------ */

const maxSubarraySum = function (arr) {
  let solution = (sum = arr[0]);
  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    solution = Math.max(sum, solution);
  }
  return solution;
};

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/* ------------------------------ Longest Word ------------------------------ */

function longestWord(sen) {
  const regex = /\w+/g;

  const res = sen.match(regex).reduce((acc, currentVal) => {
    if (acc.length < currentVal.length) {
      return currentVal;
    }
    return acc;
  }, '');

  return res;
}

console.log(longestWord('I love dogs'));
