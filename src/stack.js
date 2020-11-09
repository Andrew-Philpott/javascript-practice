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
    if (this.isEmpty()) return undefined;
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

/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

export function backspaceCompare(s, t) {
  const typedArray = function (string) {
    let result = [];
    for (const letter of string) {
      if (letter !== "#") result.push(letter);
      else result.pop();
    }
    return result;
  };
  let sStack = typedArray(s);
  let tStack = typedArray(t);
  return (
    sStack.length === tStack.length &&
    sStack.every((val, index) => val === tStack[index])
  );
}

/*
You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record.
*/
export function calPoints(ops) {
  let result = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "C":
        result.pop();
        break;
      case "D":
        result.push(result[result.length - 1] * 2);
        break;
      case "+":
        result.push(result[result.length - 1] + result[result.length - 2]);
        break;
      default:
        result.push(parseInt(ops[i]));
        break;
    }
  }
  let score = 0;
  result.forEach(function (r) {
    score += r;
  });
  return score;
}
