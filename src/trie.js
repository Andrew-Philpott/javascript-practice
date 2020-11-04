class NodeWithMap {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }
  isEnd() {
    return this.end;
  }
}

export class TrieWithMap {
  constructor() {
    this.root = new NodeWithMap();
  }

  add(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
    }
    return this.add(input.substr(1), node.keys.get([0]));
  }

  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  }

  print() {
    let words = new Array();
    let search = function (node, string) {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  }
}

const Node = function () {
  this.children = {};
  this.isWord = false;
};

export const Trie = function () {
  this.root = new Node();
};

Trie.prototype.insert = function (word, currentNode = this.root) {
  let letter = word.slice(0, 1);
  word = word.slice(1);
  let child;

  while (letter.length > 0) {
    if (currentNode.children[letter] === undefined) {
      child = new Node();
      currentNode.children[letter] = child;
    } else {
      child = currentNode.children[letter];
    }
    currentNode = child;
    letter = word.slice(0, 1);
    word = word.slice(1);
  }
  child.isWord = true;
};

Trie.prototype.search = function (word) {
  let currentNode = this.root;
  let letter = word.slice(0, 1);
  word = word.slice(1);
  while (letter.length > 0) {
    if (currentNode.children[letter]) {
      currentNode = currentNode.children[letter];
      if (word.length === 0) {
        return currentNode.isWord;
      }
      letter = word.slice(0, 1);
      word = word.slice(1);
    } else {
      return false;
    }
  }
};

Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.root;
  let letter = prefix.slice(0, 1);
  prefix = prefix.slice(1);
  while (letter.length > 0) {
    if (currentNode.children[letter]) {
      currentNode = currentNode.children[letter];
      letter = prefix.slice(0, 1);
      prefix = prefix.slice(1);
    } else {
      return false;
    }
  }
  return true;
};
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

//depth first search
Trie.prototype.searchWithWildChars = function (word) {
  const search = function (word, index, root) {
    if (!word) return true;
    if (index === word.length) return root.isWord;
    const char = word.charAt(index);
    if (char === ".") {
      for (const key of Object.keys(root.children)) {
        if (search(word, index + 1, root.children[key])) {
          return true;
        }
      }
    } else if (root.children[char] !== undefined) {
      return search(word, index + 1, root.children[char]);
    }
    return false;
  };
  return search(word, 0, this.root);
};

// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

// If there is no answer, return the empty string.
// Runtime: 148 ms, faster than 24.19% of JavaScript online submissions for Longest Word in Dictionary.
export function longestWord(words) {
  let root = new Node();
  words.sort((a, b) => a.localeCompare(b));
  for (const word of words) {
    let curr = root;
    for (const w of word) {
      let node = curr.children;
      if (!node[w]) {
        node[w] = new Node();
        curr = node[w];
      }
      curr.isWord = true;
    }
  }

  function dfs(root, string, res) {
    for (const [char, node] of Object.entries(root.children)) {
      if (!node.isWord) continue;
      res = dfs(node, string + char, res);
    }
    res = res.length < string.length ? string : res;
    return res;
  }

  return dfs(root, "", "");
}

export function longestWordFastest(words) {
  words.sort();
  const hash = {};
  let result = "";
  for (const word of words) {
    if (word.length === 1 || hash[word.slice(0, -1)]) {
      hash[word] = true;
      if (word.length > result.length) result = word;
    }
  }
  return result;
}
