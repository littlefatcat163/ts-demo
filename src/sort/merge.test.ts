import { mergeSort } from './merge';

describe('归并排序', () => {
    test('8,4,5,7,1,3,6,2 => 1,2,3,4,5,6,7,8', () => {
        expect(mergeSort([8,4,5,7,1,3,6,2])).toEqual([1,2,3,4,5,6,7,8]);
    });
    test('8,9,1,7,2,3,5,4,6,0 => [0,1,2,3,4,5,6,7,8,9]', () => {
        const arr = [8,9,1,7,2,3,5,4,6,0];
        expect(mergeSort(arr)).toEqual([0,1,2,3,4,5,6,7,8,9]);
    });
    test('随机10个数', () => {
        const arr = Array(10);
        const arr2 = Array(10);
        for (let i = 0; i < 10; i++) {
            const psn = Math.random() * 2 > 1 ? 1 : -1;
            const num = Math.random() * 100 * psn;
            arr[i] = num;
            arr2[i] = num;
        }
        expect(mergeSort(arr)).toEqual(arr2.sort((a, b) => a - b));
    });
    test('随机90000个数据选择排序', () => {
        const arr = Array(90000);
        for (let i = 0; i < 90000; i++) {
            arr[i] = Math.random() * 90000;
        }
        mergeSort(arr);
    });
});