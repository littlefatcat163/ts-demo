import BinaryTree from './BinaryTree';

describe('简单二叉树前、中、后遍历', () => {
    const binaryTree = new BinaryTree(
        {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 3,
                left: {
                    value: 4,
                    left: null,
                    right: null
                },
                right: {
                    value: 5,
                    left: null,
                    right: null
                }
            }
        }
    );
    test('前序遍历 => 1,2,3,4,5', () => {
        expect(binaryTree.front()).toEqual([1,2,3,4,5]);
    });
    test('中序遍历 => 2,1,4,3,5', () => {
        expect(binaryTree.middle()).toEqual([2,1,4,3,5]);
    });
    test('后序遍历 => 2,4,5,3,1', () => {
        expect(binaryTree.back()).toEqual([2,4,5,3,1]);
    });
});