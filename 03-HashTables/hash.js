/* ------------------------------- Hash Table ------------------------------- */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1) hash functions are fast

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) but if no space becomes O(n) due collision

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');

/* ------------------------ Hash Table Recurring Char ----------------------- */

function firstRecurringCharacter(arr) {
  const chars = new Set();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (chars.has(element)) {
      return element;
    }
    chars.add(element);
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 4, 5]));

// Brute Force

function firstRecurringCharacter2(input) {
  for (let i = 1; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)

/* ------------------------------ Is Palindrome ----------------------------- */

const isPalindrome = (x) => {
  if (x < 0) return false;

  let reversed = 0,
    y = x;

  while (y > 0) {
    const lastDigit = y % 10;
    reversed = reversed * 10 + lastDigit;
    y = (y / 10) | 0;
  }

  return x === reversed;
};

console.log(isPalindrome(121));
