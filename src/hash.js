function hash(string, numberOfBuckets) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    //add numerical value of each char
    hash += string.charCodeAt(i);
  }
  //return remainder of hash by storage amount
  return hash % numberOfBuckets;
}

export function HashTable() {
  //store data
  let container = [];
  //max size is 4
  const numberOfBuckets = 4;

  this.print = function () {
    console.log(container);
  };

  this.add = function (key, value) {
    const index = hash(key, numberOfBuckets);
    if (container[index] === undefined) {
      container[index] = [key, value];
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
