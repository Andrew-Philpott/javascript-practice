//element {name: somename, priority: 1}

function PriorityQueue() {
  this.collection = [];

  this.front = function () {
    return this.collection[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let isAdded = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element.priority < this.collection[i].priority) {
          this.collection.splice(i, 0, element);
          isAdded = true;
          break;
        }
      }
      if (!isAdded) {
        this.collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    return this.collection.shift();
  };
}
export default { PriorityQueue };
