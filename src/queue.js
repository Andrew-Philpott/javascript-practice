export class QueueClass {
  constructor() {
    this.collection = [];
  }
  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

export function QueueFunction() {
  this.collection = [];

  this.enqueue = function (element) {
    this.collection.push(element);
  };

  this.dequeue = function () {
    return this.collection.shift();
  };

  this.front = function () {
    return this.collection[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };
}

export const QueueClosure = (function () {
  let collection = [];

  function enqueue(element) {
    collection.push(element);
  }

  function dequeue() {
    return collection.shift();
  }

  function front() {
    return collection[0];
  }

  function size() {
    return collection.length;
  }

  function isEmpty() {
    return collection.length === 0;
  }

  return { enqueue, dequeue, front, size, isEmpty };
})();
