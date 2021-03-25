import Search from './index';

describe('查找', () => {
    const arr = Array(1000);
    for (let i = 0; i < 1000; i++) {
        arr[i] = i + 1;
    }
    test('线性查找', () => {
        expect(Search.linear(arr, -1)).toBe(-1);
        expect(Search.linear(arr, 1000)).toBe(999);
        expect(Search.linear(arr, 100)).toBe(99);
    });
    test('二分查找', () => {
        expect(Search.binary(arr, -1)).toBe(-1);
        expect(Search.binary(arr, 1000)).toBe(999);
        expect(Search.binary(arr, 100)).toBe(99);
    });
    test('插入查找', () => {
        expect(Search.insert(arr, -1)).toBe(-1);
        expect(Search.insert(arr, 1000)).toBe(999);
        expect(Search.insert(arr, 100)).toBe(99);
    });
});