/* --------------------------------- Sorting -------------------------------- */

const letters = ['a', 'z', 'v', 'b'];
const numbers1 = [2, 5, 20, 9, 64, 100];
const spanish = ['Jesús', 'Annie', 'Tirsa'];

// ['a','b','v','z']
letters.sort();
// [2, 5, 9, 20, 64, 100]
numbers1.sort((a, b) => a - b);
// ['Annie','Jesús','Tirsa']
spanish.sort((a, b) => a.localeCompare(b));

/* ------------------------------- Bubble Sort ------------------------------ */

const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSorting = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

bubbleSorting(numbers2);

console.log('Bubble Sort', numbers2); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

/* ----------------------------- Selection Sort ----------------------------- */

const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
};

selectionSort(numbers3);

console.log('Selection Sort', numbers3); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

/* ----------------------------- Insertion Sort ----------------------------- */

const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it.
      // This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

insertionSort(numbers4);

console.log('Insertion Sort', numbers4); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

/* ------------------------------- Merge Sort ------------------------------- */

const numbers5 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers5);

console.log('Merge Sort', answer); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

/* ------------------------------- Quick Sort ------------------------------- */

const numbers6 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers6, 0, numbers6.length - 1);
console.log('Quick Sort', numbers6); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

/* -------------------------------- Heap Sort ------------------------------- */

const heapify = (arr, length, i) => {
  let largest = i;
  const left = i * 2 + 1;
  const right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }

  return arr;
};

const heapSort = (arr) => {
  const length = arr.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    heapify(arr, length, i);
    i--;
  }

  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    heapify(arr, k, 0);
    k--;
  }

  return arr;
};

const numbers7 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
sortedArr = heapSort(numbers7);
console.log('Heap Sort', numbers7); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
