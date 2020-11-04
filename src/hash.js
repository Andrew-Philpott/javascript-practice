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
//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

export function containsDuplicate(nums) {
  const hash = {};
  for (const num of nums) {
    if (hash[num] !== undefined) return true;
    hash[num] = num;
  }
  return false;
  //return (nums.length - new Set(nums).size) !== 0
}
// export function containsNearbyDuplicate(nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === nums[i]) {
//         if (j - i <= k) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }
// function containsNearbyDuplicate(nums, k) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let r = nums[i];
//     if (!map.has(r)) map.set(r, i);
//     else {
//       if (i - map.get(r) <= k) return true;
//       map.set(r, i);
//     }
//   }
//   return false;
// }
//faster than map
export function containsNearbyDuplicate(nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let r = nums[i];
    if (hash[r] === undefined) hash[r] = i;
    else {
      if (i - hash[r] <= k) return true;
      hash[r] = i;
    }
  }
  return false;
}
