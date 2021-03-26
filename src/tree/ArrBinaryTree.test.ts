import ArrBinaryTree from './ArrBinaryTree';

describe('顺序二叉树遍历数组', () => {
    const arr: number[] = [1,2,3,4,5,6,7];
    const arrBinaryTree = new ArrBinaryTree(arr);
    test('前序遍历：1,2,4,5,3,6,7', () => {
        expect(arrBinaryTree.front()).toEqual([1,2,4,5,3,6,7]);
    });
    test('中序遍历：4,2,5,1,6,3,7', () => {
        expect(arrBinaryTree.middle()).toEqual([4,2,5,1,6,3,7]);
    });
    test('后序遍历：4,5,2,6,7,3,1', () => {
        expect(arrBinaryTree.back()).toEqual([4,5,2,6,7,3,1]);
    });
});