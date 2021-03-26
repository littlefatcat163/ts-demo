interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

export default class BinaryTree {
    public root: TreeNode | null = null;
    constructor(node: TreeNode) {
        this.root = node;
    }

    public front(node: TreeNode | null = this.root, res: number[] = []) {
        if (node !== null) {
            res.push(node.value);
            if (node.left !== null) {
                this.front(node.left, res);
            }
            if (node.right !== null) {
                this.front(node.right, res);
            }
        }
        return res;
    }

    public middle(node: TreeNode | null = this.root, res: number[] = []) {
        if (node !== null) {
            if (node.left !== null) {
                this.middle(node.left, res);
            }
            res.push(node.value);
            if (node.right !== null) {
                this.middle(node.right, res);
            }
        }
        return res;
    }

    public back(node: TreeNode | null = this.root, res: number[] = []) {
        if (node !== null) {
            if (node.left !== null) {
                this.back(node.left, res);
            }
            if (node.right !== null) {
                this.back(node.right, res);
            }
            res.push(node.value);
        }
        return res;
    }
}