function hash(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
}

export function HashTable(numBuckets) {
  let container = [];
  const numberOfBuckets = numBuckets | 4;

  this.print = function () {
    console.log(container);
  };

  this.add = function (key, value) {
    const index = hash(key, numberOfBuckets);
    if (container[index] === undefined) {
      container[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < container[index].length; i++) {
        if (container[index][i][0] === key) {
          container[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        container[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    const index = hash(key, numberOfBuckets);
    if (container[index].length === 1 && container[index][0][0] === key) {
      delete container[index];
    } else {
      for (let i = 0; i < container[index].length; i++) {
        if (container[index][i][0] === key) {
          delete container[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    const index = hash(key, numberOfBuckets);
    if (container[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < container[index].length; i++) {
        if (container[index][i][0] === key) {
          return container[index][i][1];
        }
      }
    }
  };
}
//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

export function containsDuplicate(nums) {
  const hash = {};
  for (const num of nums) {
    if (hash[num] !== undefined) return true;
    hash[num] = num;
  }
  return false;
}

export function containsNearbyDuplicate(nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) hash[nums[i]] = i;
    else {
      if (i - hash[nums[i]] <= k) return true;
      hash[nums[i]] = i;
    }
  }
  return false;
}
//Separate chaining - linked list
//can also use arrays, binary trees, self balancing trees
const HashSetLinkedList = function () {
  this.set = new Array(1000);
  this.set.fill(false);
  this.hash = function (input) {
    return input % 1000;
  };
};
HashSetLinkedList.prototype.add = function (key) {
  if (this.set[this.hash(key)]) {
    let node = this.set[this.hash(key)];
    while (node.next) {
      if (node.data === key) return;
      node = node.next;
    }
    if (node.data === key) return;
    node.next = {
      data: key,
      next: null,
    };
  } else {
    this.set[this.hash(key)] = {
      data: key,
      next: null,
    };
  }
};
HashSetLinkedList.prototype.remove = function (key) {
  let node = this.set[this.hash(key)];
  let prev = undefined;
  while (node) {
    if (node.data === key) {
      if (prev) prev.next = node.next;
      else this.set[this.hash(key)] = node.next;
    }
    prev = node;
    node = node.next;
  }
};
HashSetLinkedList.prototype.contains = function (key) {
  let node = this.set[this.hash(key)];
  while (node) {
    if (node.data === key) return true;
    node = node.next;
  }
  return false;
};
export function countPrimes(n) {
  let isPrime = new Array(n).fill(true);
  isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (!isPrime([i])) continue;
    for (let j = i * i; j < n; j += i) isPrime[j] = false;
  }
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime([i])) count++;
  }
  return count;
}
/*
Open addressing with linear probing
Load factor = items in table/size of table

Ex: phone book
*/
export class phoneBook {
  constructor(storageSize) {
    //keep count of items
    this.itemCount = 0;
    //storage size
    this.storageSize = storageSize;
    //storage size decreased/increased when less or more than fraction
    this.maxLoadFactor = 0.667;
    //factor by which storage size changes
    this.sizeFactor = 1.5;
    //storage
    this.hashTable = new Array(storageSize);
  }
  hash(x) {
    const randomNumA = 543;
    const randomNumB = 23;
    const p = 10000019;
    let size = this.storageSize;
    return ((randomNumA * x + randomNumB) % p) % size;
  }

  add(phoneNumber, name) {
    const key = phoneNumber.replace(/-/g, "");
    const hash = this.hash(key);

    if (this.hashTable[hash]) {
      if (this.hashTable[hash] === key) this.hashTable[hash].value = name;
      else {
        const value = this.probe(hash);
        this.hashTable[value] = { key, value };
        this.itemCount++;
      }
    } else {
      const value = this.probe(hash);
      this.hashTable[hash] = { key, value };
    }
    if (this.count >= this.storageSize * this.maxLoadFactor) {
      //increase size
    }
  }
  probe(hash) {
    const a = 1; //1 or where greatest common denominator of storageSize and a is 1
    let i = 0; //counter
    let val = (hash + a * i) % this.size; //value with probe of 0
    while (this.hashTable[val]) {
      i++; //increment i
      val = (hash + a * i) % this.storageSize; //probe next position
    }
    return val; //empty table position
  }

  increaseSize() {
    let tempTable = this.hashTable;
    this.storageSize = this.storageSize * this.sizeFactor;
    this.hashTable = new Array(this.storageSize);
    for (let i = 0; i < tempTable.length; i++) {
      if (tempTable[i]) {
        const key = tempTable[i].key;
        const value = tempTable[i].value;
        const hash = this.hash(key);
        if (this.hashTable[hash]) {
          const newHash = this.probe(hash);
          this.hashTable[newHash] = { key, value };
        } else {
          this.hashTable[hash] = { key, value };
        }
      }
    }
  }

  decreaseSize() {
    let tempTable = this.hashTable;
    this.storageSize = this.storageSize / this.sizeFactor;
    this.hashTable = new Array(this.storageSize);
    for (let i = 0; i < tempTable.length; i++) {
      if (this.tempTable[i]) {
        const key = tempTable[i].key;
        const value = tempTable[i].value;
        const hash = this.hash(key);
        if (this.tempTable[hash]) {
          const probeHash = this.probe(hash);
          this.hashTable[probeHash] = { key, value };
        } else {
          this.hashTable[hash] = { key, value };
        }
      }
    }
  }

  getValue(phoneNumber) {
    const key = phoneNumber.replace(/- /g, ""); //remove hyphens
    const hash = this.hash(key); //create hash
    const a = 1; //probe a - 1 or where greatest common denominator of size and a is 1
    let i = 0; //counter
    let probeHash = (hash + a * i) % this.storageSize; //initial probe value
    //if table position is filled
    if (this.hashTable[hash]) {
      //if the keys match, return value
      if (this.hashTable[hash].key === key) return this.hashTable[hash].value;
    } else {
      //while table position has value
      while (this.hashTable[probeHash]) {
        //if the keys match, return value
        if (this.hashTable[probeHash].key === key) return this.hashTable.value;
        i++;
        //probe next position
        probeHash = (hash + a * i) % this.storageSize;
      }
    }
    return undefined;
  }

  remove(phoneNumber) {
    const key = phoneNumber.replace(/-| /g, "");
    const hash = this.hash(key);
    const a = 1;
    let i = 0;
    let probeHash = (hash + a * i) % this.storageSize;

    if (this.hashTable[hash]) {
      if (this.hashTable[hash].key === key) {
        delete this.hashTable[hash];
        this.itemCount--;
      } else {
        while (this.hashTable[probeHash]) {
          if (this.hashTable[probeHash].key === key) {
            delete this.hashTable[probeHash];
            this.itemCount--;
            break;
          }
          i++;
          probeHash = (hash + a * i) % this.storageSize;
        }
        return undefined;
      }
    } else {
      return undefined;
    }
    if (this.itemCount < this.storageSize * this.maxLoadFactor)
      this.decreaseSize();
  }
}
