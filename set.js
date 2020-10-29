class SetClass {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  getValues() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    const unionSet = new SetClass();
    const thisSetValues = this.getValues();
    const otherSetValues = otherSet.getValues();
    thisSetValues.forEach(function (val) {
      unionSet.add(val);
    });
    otherSetValues.forEach(function (val) {
      unionSet.add(val);
    });
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new SetClass();
    const thisSetValues = this.getValues();
    const otherSetValues = otherSet.getValues();
    thisSetValues.forEach(function (val) {
      if (otherSetValues.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new SetClass();
    const thisSetValues = this.getValues();
    thisSetValues.forEach(function (val) {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    return differenceSet;
  }

  subset(otherSet) {
    const thisSetValues = this.getValues();
    return thisSetValues.every(function (val) {
      return otherSet.has(val);
    });
  }
}
function SetFunction() {
  this.collection = [];

  this.has = function (element) {
    return this.collection.indexOf(element) !== -1;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.getValues = function () {
    return this.collection;
  };

  this.union = function (otherSet) {
    const unionSet = new SetFunction();
    const thisSetValues = this.getValues();
    const otherSetValues = otherSet.getValues();
    thisSetValues.forEach(function (val) {
      unionSet.add(val);
    });
    otherSetValues.forEach(function (val) {
      unionSet.add(val);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    const intersectionSet = new SetFunction();
    const thisSetValues = this.getValues();
    const otherSetValues = otherSet.getValues();
    thisSetValues.forEach(function (val) {
      if (otherSetValues.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    const differenceSet = new SetFunction();
    const thisSetValues = this.getValues();
    thisSetValues.forEach(function (val) {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    const thisSetValues = this.getValues();
    return thisSetValues.every(function (val) {
      return otherSet.has(val);
    });
  };
}

const SetClosure = (function () {
  let collection = [];

  function has(element) {
    return collection.indexOf(element) !== -1;
  }

  function add(element) {
    if (!has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  function remove(element) {
    if (has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  function getValues() {
    return collection;
  }

  function union(otherSet) {
    const unionSet = [];
    const thisSetValues = getValues();
    const otherSetValues = otherSet.getValues();
    thisSetValues.forEach(function (val) {
      unionSet.add(val);
    });
    otherSetValues.forEach(function (val) {
      unionSet.add(val);
    });
    return unionSet;
  }

  function intersection(otherSet) {
    const intersectionSet = [];
    const thisSetValues = getValues();
    thisSetValues.forEach(function (val) {
      if (otherSet.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  }

  function difference(otherSet) {
    const differenceSet = [];
    const thisSetValues = getValues();
    thisSetValues.forEach(function (val) {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    return differenceSet;
  }

  function subset(otherSet) {
    const thisSetValues = getValues();
    return thisSetValues.every(function (val) {
      return otherSet.has(val);
    });
  }

  return {
    has,
    add,
    remove,
    getValues,
    union,
    intersection,
    difference,
    subset,
  };
})();
