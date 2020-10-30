//Class Implementation
export class StackClass {
  constructor(maxSize) {
    this.count = 0;
    this.collection = {};
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.maxSize === this.count;
  }

  push(value) {
    this.collection[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.isEmpty) {
      return undefined;
    }
    this.count--;
    const result = this.collection[this.count];
    delete this.collection[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.collection[this.count - 1];
  }
}
export function StackFunction(size) {
  this.count = 0;
  this.collection = {};
  this.maxSize = size;

  this.isEmpty = function () {
    return this.count === 0;
  };

  this.isFull = function () {
    return this.maxSize === this.count;
  };

  this.push = function (value) {
    this.collection[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.collection[this.count];
    delete this.collection[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.collection[this.count - 1];
  };
}
//Truly private variables
export const StackClosure = (function () {
  let count = 0;
  let collection = {};
  let maxSize = 0;

  function getMaxSize() {
    return maxSize;
  }

  function setMaxSize(size) {
    maxSize = size;
  }

  function isEmpty() {
    return count === 0;
  }

  function isFull() {
    return maxSize === count;
  }

  function push(value) {
    collection[count] = value;
    count++;
  }

  function pop() {
    if (isEmpty) {
      return undefined;
    }
    count--;
    const result = collection[count];
    delete collection[count];
    return result;
  }

  function size() {
    return count;
  }

  function peek() {
    return collection[count - 1];
  }

  return { isEmpty, isFull, push, pop, size, peek, getMaxSize, setMaxSize };
})();
