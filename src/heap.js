//all child nodes are greater than or equal to the parent nodes
//order on same level does not matter
//complete binary trees.
//left child: i * 2
//right child: i * 2 + 1
//parent i / 2
//case: remove root node. Last node becomes root node and is then checked
//against child nodes to determine placement.
export const MinHeap = function () {
  let heap = [null];
  this.insert = function (num) {
    heap.push(num);
    //more than 1 item in the heap
    if (heap.length > 2) {
      //start from the last node
      let childIndex = heap.length - 1;
      let parentIndex = Math.floor(childIndex / 2);
      //if the newly inserted value is less than its parent, we need to move it up
      //while the value at the current index is less than the value at the parent index.
      while (heap[childIndex] < heap[parentIndex]) {
        //if not on the root node
        if (childIndex >= 1) {
          //switch the node we just inserted with the parent node
          [heap[parentIndex], heap[childIndex]] = [
            heap[childIndex],
            heap[parentIndex],
          ];
          //if parent node is not the root node
          if (parentIndex > 1) {
            childIndex = parentIndex;
          } else {
            break;
          }
        }
      }
    }
  };

  //always remove the smallest value
  this.remove = function () {
    //first node is the smallest
    let smallest = heap[1];
    if (heap.length > 2) {
      //the root node is set to the last item in the array
      heap[1] = heap[heap.length - 1];
      //remove the last item since it is now the root node
      heap.splice(heap.length - 1);
      //if there are only 2 items in the array **remember first is null**
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      //while the value at the current index is greater than the left child node
      //or right child node
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          //swap places between left child node and parent
          [heap[i], heap[left]] = [heap[left], heap[i]];
        } else {
          //swap places between right child node and parent
          [heap[i], heap[right]] = [heap[right], heap[i]];
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};
