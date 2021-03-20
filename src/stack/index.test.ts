import Stack from './index';

describe('链表栈', () => {
    const stack = new Stack();
    test('初始栈为空', () => {
        expect(stack.length).toBe(0);
        expect(stack.size()).toBe(0);
        function popErr() {
            stack.pop();
        }
        expect(popErr).toThrow('栈空');
    });
    test('从1到10000入栈', () => {
        for (let i = 1; i <= 10000; i++) {
            stack.push(i);
        }
        expect(stack.length).toBe(10000);
        expect(stack.size()).toBe(10000);
    });
    test('出栈，10000到1', () => {
        for (let i = 10000; i > 0; i--) {
            expect(stack.pop()).toBe(i);
        }
        expect(stack.length).toBe(0);
        expect(stack.size()).toBe(0);
    });
});