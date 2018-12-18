class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  removeChild(child) {
    if (this.left && this.left === child) {
      this.left = null;
      return true
    }

    if (this.right && this.right === child) {
      this.right = null;
      return true
    }

    return false
  }

  replaceChild(node, child) {
    if (this.left && this.left === node) {
      this.left = child;
      return true;
    }

    if (this.right && this.right === node) {
      this.right = right;
      return true;
    }

    return false
  }
}

class BST {
  insert(val) {
    let node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > node.val) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          currentNode.left = node;
          break
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right
        } else {
          currentNode.right = node;
          break
        }

      }
    }

    return this
  }

  search(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          return null
        }
      } else if (currentNode.val < val) {
        if (currentNode.right) {
          currentNode = currentNode.right
        } else {
          return null
        }
      } else {
        return currentNode
      }
    }
  }

  remove(val) {
    let node = this.search(val);
    if (!node) {
      return
    }

    let parent = this.getParent(node.val);

    if (!node.left && !node.right) {
      if (parent) {
        parent.removeChild(node)
      } else {
        this.root = null;
      }
    } else if (node.left && node.right) {
      // 寻找左子树的最大节点或右子树的最小节点
      // let replaceNode = this.findMax(node.left);
      let replaceNode = this.findMin(node.right);
      this.remove(replaceNode.val);
      node.val = replaceNode.val;
    } else {
      let replaceNode = node.left || node.right
      if (parent) {
        parent.replaceChild(node, replaceNode)
      } else {
        node.val = replaceNode.val;
        node.left = replaceNode.left;
        node.right = replaceNode.right;
      }
    }

    return true;
  }

  * preOrderTraversal(root) {
    if (!root) {
      root = this.root
    }

    yield root

    if (root.left) {
      yield* this.preOrderTraversal(root.left)
    }

    if (root.right) {
      yield* this.preOrderTraversal(root.right)
    }
  }

  * inOrderTraversal(root) {
    if (!root) {
      root = this.root
    }

    if (root.left) {
      yield* this.inOrderTraversal(root.left)
    }

    yield root

    if (root.right) {
      yield* this.inOrderTraversal(root.right)
    }
  }

  * postOrderTraversal(root) {
    if (!root) {
      root = this.root
    }

    if (root.left) {
      yield* this.postOrderTraversal(root.left)
    }

    if (root.right) {
      yield* this.postOrderTraversal(root.right)
    }

    yield root
  }

  getParent(val) {
    if (val === this.root.val) {
      return null
    }

    let currentNode = this.root

    while (currentNode) {
      if (currentNode.val > val) {
        if (currentNode.left) {
          if (currentNode.left.val === val) {
            return currentNode
          } else {
            currentNode = currentNode.left
          }
        } else {
          return null
        }
      } else {
        if (currentNode.right) {
          if (currentNode.right.val === val) {
            return currentNode
          } else {
            currentNode = currentNode.right
          }
        } else {
          return null
        }
      }
    }
  }

  findMin(node) {
    while (node.left) {
      node = node.left
    }

    return node
  }

  findMax(node) {
    while (node.right) {
      node = node.right
    }

    return node
  }

  toString() {
    return this.root
  }
}

let bst = new BST()

bst.insert(1).insert(4).insert(2).insert(3).insert(5)

console.log([...bst.inOrderTraversal()].map(v => v.val))

bst.remove(4);

console.log([...bst.inOrderTraversal()].map(v => v.val))
