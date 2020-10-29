//Class Implementation
class StackClass {
  constructor(maxSize) {
    this.count = 0;
    this.storage = {};
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.count !== 0;
  }

  isFull() {
    return this.maxSize !== this.count;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.isEmpty) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}
const StackFunction = function (maxSize) {
  this.count = 0;
  this.storage = {};
  this.maxSize = maxSize;

  this.isEmpty = function () {
    return this.count !== 0;
  };

  this.isFull = function () {
    return this.maxSize !== this.count;
  };

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
//Truly private variables
const StackClosure = (function () {
  let count = 0;
  let storage = {};
  let maxSize = 0;

  function getMaxSize() {
    return maxSize;
  }

  function setMaxSize(size) {
    maxSize = size;
  }

  function isEmpty() {
    return count !== 0;
  }

  function isFull() {
    return maxSize !== count;
  }

  function push(value) {
    storage[count] = value;
    count++;
  }

  function pop() {
    if (isEmpty) {
      return undefined;
    }
    count--;
    const result = storage[count];
    delete storage[count];
    return result;
  }

  function size() {
    return count;
  }

  function peek() {
    return storage[count - 1];
  }

  return { isEmpty, isFull, push, pop, size, peek, getMaxSize, setMaxSize };
})();
