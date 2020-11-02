export function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let prevNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
      length--;
    }
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    let node = new Node(element);

    let currentNode = head;
    let prevNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      prevNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    let currentNode = head;
    let prevNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}
