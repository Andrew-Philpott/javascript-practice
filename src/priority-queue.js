function PriorityQueue() {
  let collection = [];

  this.isEmpty = function () {
    return collection.length === 0;
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    }
  };
}
export default { PriorityQueue };
