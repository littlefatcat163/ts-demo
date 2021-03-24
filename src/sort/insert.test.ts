import insert from './insert';

describe('插入排序', () => {
    test('10,-1,20,18,0,9,6,7 => [-1,0,6,7,9,10,18,20]', () => {
        const arr = [10,-1,20,18,0,9,6,7];
        insert(arr);
        expect(arr).toEqual([-1,0,6,7,9,10,18,20]);
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
        insert(arr);
        expect(arr).toEqual(arr2.sort((a, b) => a - b));
    });
    test('随机90000个数据选择排序', () => {
        const arr = Array(90000);
        for (let i = 0; i < 90000; i++) {
            arr[i] = Math.random() * 90000;
        }
        insert(arr);
    });
});