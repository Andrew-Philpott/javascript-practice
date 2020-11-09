import { StackClass } from "./stack";
/*
Binary search tree
add order 9,4,3,6,17,22,20,5,7
                9
              /   \
            4      17
           / \       \
          3   6       22
             / \     /
            5   7   20
-------------------------------
Pre Order: 9,4,3,6,5,7,17,22,20 - parent before children - root, left, right
Post Order: 3,5,7,6,4,20,22,17,9 - children before parents - left, right, root
In Order: 3,4,5,6,7,9,17,20,22 - left to right - left, root, right - implement with queue
-------------------------------            
*/

export class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTreeClass {
  constructor() {
    this.root = null;
  }

  print() {
    let node = this.root;
    let result = "";
    function depthFirst(node) {
      if (node) {
        result += node.data.toString() + " ";
        depthFirst(node.left);
        depthFirst(node.right);
      }
    }
    depthFirst(node);
    return result;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) return searchTree(node.left);
        } else if (data > node.data) {
          if (node.right === null) node.right = new Node(data);
          else if (node.right !== null) return searchTree(node.right);
        }
        return null;
      };
      searchTree(node);
    }
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) return null;
      if (data === node.data) {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
      } else if (data < node.data) node.left = removeNode(node.left, data);
      else node.right = removeNode(node.right, data);
      return node;
    };
    this.root = removeNode(this.root, data);
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) current = current.left;
      else current = current.right;
      if (current === null) return null;
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current.data === data) return true;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return false;
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) return left + 1;
    else return right + 1;
  }

  findMaxHeight(node = this.root) {
    if (node === null) return -1;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) return left + 1;
    else return right + 1;
  }

  inOrder() {
    if (this.root === null) return null;
    const result = [];
    const traverse = function (node) {
      node.left && traverse(node.left);
      result.push(node.data);
      node.right && traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  preOrder() {
    if (this.root === null) return null;
    const result = [];
    const traverse = function (node) {
      result.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  //left, right, root
  postOrder() {
    if (this.root === null) return null;
    const result = [];
    const traverse = function (node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.data);
    };
    traverse(this.root);
    return result;
  }

  //breadth first
  levelOrder() {
    let result = [];
    //Queue, first in first out
    let queue = [];
    //start from root node
    if (this.root !== null) {
      queue.push(this.root);
      while (queue.length > 0) {
        //shift removes the first element
        let node = queue.shift();
        result.push(node.data);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
      return result;
    }
    return null;
  }
  minDiff() {
    let nums = this.inOrder();
    let min = nums[1] - nums[0];
    for (let i = 0; i < nums.length; i++) {
      min = Math.min(min, nums[i + 1] - nums[i]);
    }
    return min;
  }
}

/*
Given preorder traversal of a binary search tree, construct the BST.
10, 5, 1, 7, 40, 50
preorder traversal: root, left, right
 */
export class ConstructNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class ConstructBST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (this.root === null) {
      this.root = new ConstructNode(data);
    } else {
      const search = function (node) {
        if (data < node.data) {
          if (!node.left) {
            node.left = new ConstructNode(data);
            return;
          } else {
            return search(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new ConstructNode(data);
            return;
          } else {
            return search(node.right);
          }
        }
        return null;
      };
      search(this.root);
    }
  }
}
export class NodeBstOn2 {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
export class Index {
  constructor() {
    this.index = 0;
  }
}
export class BinaryTreeOn2 {
  constructor() {
    this.index = new Index();
  }

  constructTree(pre, size) {
    const constructTreeUtil = function (pre, preIndex, low, high, size) {
      if (preIndex.index >= size || low > high) return null;
      let root = new Node(pre[preIndex.index]);
      preIndex.index = preIndex.index + 1;
      if (low === high) return root;
      let i;
      for (i = low; i <= high; ++i) {
        if (pre[i] > root.data) break;
      }
      root.left = this.constructTreeUtil(
        pre,
        preIndex,
        preIndex.index,
        i - 1,
        size
      );
      root.right = this.constructTreeUtil(pre, preIndex, i, high, size);
      return root;
    };
    return constructTreeUtil(pre, this.index, 0, size - 1, size);
  }
}
export class NodeBstOn extends NodeBstOn2 {}
export class RecursiveBinaryTreeOn {
  printInOrder(node) {
    if (node === null) return;
    this.printInOrder(node.left);
    console.log(node.data + " ");
    this.printInOrder(node.right);
  }
  constructTree(pre, size) {
    let index = new Index();
    const constructTreeUtil = function (pre, preIndex, key, min, max, size) {
      if (preIndex.index >= size) return null;
      let root = null;
      //if the value is within range of allowed javascript number values
      console.log(preIndex.index);
      if (key > min && key < max) {
        //create the root node
        root = new Node(key);
        //increase the index reference
        preIndex.index = preIndex.index + 1;
        //if there are more nodes to be added
        if (preIndex.index < size) {
          //within range of min key
          console.log("left node");
          root.left = constructTreeUtil(
            pre,
            preIndex,
            pre[preIndex.index],
            min,
            key,
            size
          );
        }
        if (preIndex.index < size) {
          //within range of key max
          console.log("right node");
          root.right = constructTreeUtil(
            pre,
            preIndex,
            pre[preIndex.index],
            key,
            max,
            size
          );
        }
      }
      return root;
    };
    return constructTreeUtil(
      pre,
      index,
      pre[0],
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      size
    );
  }
}
export class StackBinaryTreeOn {
  printInOrder(node) {
    if (node === null) return;
    this.printInOrder(node.left);
    console.log(node.data + " ");
    this.printInOrder(node.right);
  }

  constructTree(pre, size) {
    let root = new Node(pre[0]);
    let stack = new StackClass(size);
    stack.push(root);
    for (let i = 1; i < size; i++) {
      let temp = null;
      while (stack.size() > 0 && pre[i] > stack.peek().data) {
        temp = stack.pop();
      }
      if (temp !== null) {
        temp.right = new Node(pre[i]);
        stack.push(temp.right);
      } else {
        temp = stack.peek();
        temp.left = new Node(pre[i]);
        stack.push(temp.left);
      }
    }
    return root;
  }
}
